---
slug: about-server-timeout
title: 'Company API: About Server Timeout'
author: Christian Ryan Macarse
author_title: Full Stack Developer / DevOps
author_url: https://github.com/crrmacarse
author_image_url: /img/team-christian.svg
tags: [Infrastructure, Backend, API, Heroku, Digital Ocean, MYSQL]
---

This is to address the placed request timeout on our API server.

The value in question:

```ts
// src/constants/default.ts

/*
 * A Request time out error will be thrown
 * after exceeding the stated value
 */
export const REQUEST_TIME_OUT = 10000;
```

#### Have a cup of tea and let this sink in

Don't you think a 10s+ processing time is an overkill? There is probably a problem underlying that needed to be address in there.

The following exception is a reminder to us that we need to be vigilant on how we do and approach things. Think of this as our `ESLint` for request process time.

I have prepared below some optimization ideas to assist with this issue.

### Points of Interest

- We're using heroku for free. They have so called dynos where it shuts off if unused after 30mins of inactivity(https://www.heroku.com/dynos). So basically, it'll boot back the app every time it'll come back from inactivity. This is a known issue with free cloud infrastructure. Refer about "cold start". That might add on top of request time(+1s?).
- I can't just add another "special treatment" as staging's purpose is a replication of production. Staging exist for a purpose to prevent not-so ready codes to enter production.

### Debugging

There is actually an existing pluggable interceptor to help assist debugging execution time of a request.

```ts
// src/logging/logging.intercptor.ts

/*
 * This is useful for testing process time of a route
 * 
 * USAGE:
 * 
 * @UseInterceptors(LoggingInterceptor) <-- append on top of a controller
 * export class ExampleController {}
 * 
 * reference: https://docs.nestjs.com/interceptors
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    return next
      .handle()
      .pipe(
        tap(() => console.log(`Execution time: ${Date.now() - now}ms`)),
      );
  }
}
```

Example Usage:

```ts
import { UseInterceptors, Controller } from '@nestjs/common';
import LoggingInterceptors from 'logging/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller()
export class ProblematicController {
    // ...
}
```

Output:

```bash
Execution time: 6070ms
```

Above result is locally run and connected to our office staging database. This request is from `/accounts` route with 150Kbps connection speed at 3PM. Preloads users and address table.

> On `v0.9.0`, I'll create a global version of this instead. You'll just need to supply `DEBUG=true` in the `.env` file and it'll stream the execution time values per request.

### Optimization Approaches

- Add Pagination

A significant execution time reduction of almost **50%** compared from previous by just adding a pagination support.

```bash
# { "take": 20, "skip": 1 }

Execution time: 3382ms
```

- Caching

We actually have an integrated caching mechanism. Try it out if above still doesn't work!

refer: https://docs.nestjs.com/techniques/caching

- Queries

There might be a problem with the query.

#### Example Scenario

Check for `eager` property in Entity if it is set to true. Do you really need it? Since it automatically preloads relationship on all queries if the entity is called.

I might not need the `users` table to eagerly load on `accounts` when logging in(`POST /auth/login`) since I only need `username` and `password` which is already found on `accounts`. Preloading `users` is considered an overkill.

### Resolution

I'll approve adding another 5s on top of our current if above approaches doesn't help. We will adjust gradually in a 5s interval till we hit the right spot.