---
id: api
title: Company API
slug: /api
---

# Company API

[Open to Interact](https://api.xtendops.com)

Company API is a brainchild of the team to address the scaling of the company. Geared to be the main pipe of all data from company. The project was codenamed "Jefferson" This intends to be a go-to for a ll data-related solution. Supports blabla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et est quis quam commodo eleifend. Integer pharetra velit orci, et accumsan libero eleifend ut. Nunc cursus eu augue ac convallis. Sed varius arcu nec justo feugiat luctus. Sed accumsan fermentum tempus. Nulla non elit ac diam maximus maximus quis in nibh.

A platform for the developers a like Praesent congue sit amet massa eget ultricies. Nullam lacinia et ex in suscipit. Donec in sapien sem. Fusce vitae lectus luctus leo vulputate ultrices. In tempor erat dolor, dictum auctor urna suscipit eget. In vitae nunc nisi. Etiam a suscipit orci.

Automated CI/CD with Github Automations and customizable blablabla

:::note

The Jefferson project is running on the latest LTS version of Node and powered by NextJS as its core framework. Fully written in Typescript with linting by ESLint.

:::

## Features

A feature-rich backend server.

- Typescript-written
- Confidence
- Security blabla
- Cron jobs
- Curated by a team of professionals
- Empowers the company Slack Bot

<details>
<summary>and more...</summary>

- Typescript-written
- Security blabla
- Cron jobs
- Empowers the company Slack Bot

</details>
<br />

## Integrations

The application supports wide variety of integrations.

<table border="0" id="table-custom">
 <tr>
    <td>- Digital Ocean</td>
    <td>- Heroku</td>
    <td>- Github Actions</td>
    <td>- Slack API</td>
 </tr>
 <tr>
    <td>- Snyk</td>
    <td>- Twilio API</td>
    <td>- Zendesk API</td>
    <td>- Google Analytics</td>
 </tr>
 <tr>
    <td>- Google OAuth API</td>
    <td>- Google Mail</td>
    <td>- Google Calendar</td>
    <td>- Google Dialogflow</td>
 </tr>
 <tr>
    <td>- Tawk.to</td>
    <td>- Zapier</td>
    <td>- Compodoc</td>
    <td>- Codecov</td>
 </tr>
</table>

## Understanding the Application

Something of an intro about blabla

:::tip

The application has a built-in documentation powered by Compodoc. Just run `npm run doc` to spawn the application.

:::

### Prerequisites

- Read our Company Documentations
- Good knowledge
- Something something
- Must have a good knowledge with NestJS
- Thoroughly read NestJS documentation

### API Tags

Routes is grouped by tags

Tag | Description | Supports |
--- | --- | --- |
general | General API Routes |
authentication  | Deals with authentication |
account  | Account-related routes | https://account.xtendops.com |
health | Company Infrastructure Heath Checkers | https://status.xtendops.com |
recruitment | Recruitment Project API Routes | https://careers.xtendops.com |
xconnect | XConnect Project API Routes | https://xconnect.xtendops.com |

### Authentication and Authorization

Discuss about OAuth

Show picture of OAuth flow

Nunc vel dictum risus. Proin rhoncus vitae dui vel euismod. Sed sodales est eget velit ultricies porttitor. Phasellus ac mi ultrices, commodo tortor tincidunt, mattis turpis. Vestibulum nisi nisi, hendrerit ac justo sit amet, vehicula rutrum neque. Vivamus elementum pretium est, eget bibendum quam eleifend vitae. Fusce finibus sapien ac nunc finibus vehicula. Nullam ut maximus mauris. Curabitur volutpat lacinia tortor vitae condimentum. Donec pretium lectus elit, eget egestas turpis porta ac. Fusce vitae malesuada lacus. Utilized `passport-js`

#### Refresh Tokens

Discuss about Refresh Tokens

#### Privileges

<details>
<summary>Check the list of Available Privileges</summary>
<br />

| Code      | Title         | Type   | Description |
| --------- | :-----------: | -----: | ------------
| route:*   | right-aligned | route  |
| read:*    |   centered    | action |
| write:*   |   are neat    | action |
| delete:*  |   are neat    | action |

</details>

<br />

### Sending a Request

Vivamus elementum pretium est, eget bibendum quam eleifend vitae. Fusce finibus sapien ac nunc finibus vehicula. Nullam ut maximus mauris. Curabitur volutpat lacinia tortor vitae condimentum. Donec pretium lectus elit, eget egestas turpis porta ac. Fusce vitae malesuada lacus. We highly recommend to use `axios` library with network-related requests.

:::important

Sending of payload should be in `camelCase` format and Accept headers as `application/json`.

:::

:::tip

Routes will always be in `kebab-case` format.

```
GET /xconnect/longer-vesion/:id
```

:::

### Validations

Prior to consuming the received data. It'll go through a validation process where it'll be sanitized first. The application validator is powered by `class-validator` found in every `*.dto.ts` files.

Example response from a validation error:

```json
{
   example: 'error'
}
```

### Database and ORM

ORM or also knwon Object Relation Mapping is a. MYSQL is our database of choice. We use `typeorm`

### Dealing with Response

We use class `class-transformer`. Nullam ut maximus mauris. Curabitur volutpat lacinia tortor vitae condimentum.
Donec pretium lectus elit, eget egestas turpis porta ac. Fusce vitae malesuada lacus.

:::important

Response should be always in `camelCase` format. Irregularities should be brought up.

:::

Response without data

```json
{
    message: 'Succesfuly added an Account',
}

```

Response with data

```json
{
    accounts: [],
}
```

Discuss about status codes.

:::caution

From NestJS regarding Serialization:

> Note that we must return an instance of the class. If you return a plain JavaScript object, for example, { user: new UserEntity() }, the object won't be properly serialized.

To mitigate such issue, utilize `plainToClass` from `class-transformer` to manually serialize.

:::

### Handling Errors

Handling of errors is easy as receing the `message` sent by the server.

Example Error response from invalid login:

```json
{
    message: 'Unauthenticated',
    timestamp: '',
}
```

Parse the status code to identify error if it falls to `2xx`, `3xx`, `4xx`, or `5xx`

link: to status codes

### Testing

Testing is powered by ``.

### Security

Security is our main agenda.

Powered by Snyk

Read more about company security documentation here

## Deployment

### Infrastructure

Production: Digital Ocean
Staging: Heroku

### Releases

The application is running on an nginx reverse proxy.

Releases will come in

## Conclusion

### What we wanted

Like any other dasjdkl ajsdklja klsd a

- List of Targets

### Credits

Thanks to
