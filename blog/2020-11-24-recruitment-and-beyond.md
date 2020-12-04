---
slug: recruitment-and-beyond
title: Recruitment App Project & Beyond
author: Christian Ryan Macarse
author_title: Full Stack Developer / DevOps
author_url: https://github.com/crrmacarse
author_image_url: ../img/team-christian.svg
tags: [Recruitment]
---

Production Website: https://careers.xtendops.com/ <br />
Staging Website: https://xo-big-spoon.herokuapp.com/

The current project is not just actually limited to recruitment. It was created from the ground up with the intention to rewrite everything that is technology-related in order to protect the company from the risk of scaling. It also aims to provide the necessary fruitful data to the higher-ups to analyze what could be done moving forward in a data-driven fashion.

The project introduces a new database, xtend-next. A MYSQL database equipped with standards such as strict typing; controlled intakes; timestamps; updated-by-who, and no-data-deletion policy(this aims to preserve data for future analysis). Along with the development we’ve created Kawalian, A database seeder side project that aims to migrate data from old to new with such precision and integrity.

The main project(codename: Big Spoon) positions the company to combat scalability. It promises a quality profiling system and reports generation capability. This was designed to revolve around data analysis as we firmly believe that information is power.

Proudly showcases new stuff in the world of software development. The project includes Signed URLs; Service Workers; Global State Managements; Serverless Hosting; Compressions; Form tokens validation; ORM Implementation; Test-driven development; Typescript;  and more!

Architectured to our delight! We hope you’ll like it

Do you want to try it out? Simply head over to the forgot password page. Input directly the company email you’re using and it’ll send a confirmation email to you. Click the link and guided instructions will follow :)
Forgot Password link: https://careers.xtendops.com/forgot-password

## Project Features

- Support for recruitment as per agreement.
- A complete rewrite of the company database.
- Dark mode support
- User Profiling that doesn’t suck
- Ensured responsiveness across all devices
- Downloadable to your phone(IOS and Android) and desktop as a separate application ;)
- Utilizes Service Worker! A new browser technology that provides caching technique which aims to boost fast load times and seamless UX interaction. Opens the possibility of offline usage!
- Public API for nerds.
- A robust technological stack with up-to-date methodologies. If interested to hear more about this. Shoot me a dm(Christian)
- Support for Slack Bot Integration. You could actually see, xo-bot in the bottom sidebar in the slack desktop app. A WIP bot that could be a potential game-changer. Currently, it supports notifying designated users.
- Privilege-based Authentication. This opens the possibility of dynamically limiting specific users on what data they could only access.

    Scenarios:
        - User A and User B are identical in position but could be different in their respective data access by toggling what privilege they could only get. Example: Read Access to the User A is given while User B could have both(Read and Write)
        - Automated mailing service because we know you’ll love it :). Check below for the screenshots
- Telemetry with Google Analytics. Tracks user interactions behind the scene for analysis.	

    Examples:
        - Locations / Browers / Platform they’re using while accessing the website
        - Most visited page
        - Website visitors count and spent-time
        -  And more!

    Scenarios:
        - Could be notified that there is big traffic coming from a specific audience
            Example:
                - There are a lot of users visiting from location A.
                - Our facebook campaign is working as there are number of visitors coming from facebook
                - Could shift our focus on what matters

- Thanks to the database rewrite. It opens to new possibilities of Report Generation

    Report Generation Scenarios:
        - Address from regional-level to street-level queries! Would you like to know how many employees we have that reside in Sambag, Jaro? We could do that :)
        - The age group of current employees that is a graduate from Central Philippine University with a degree in BS Computer Science. Male only.
        - And more!

- Bunch of Security Protections
  - CSRF Protection(Adds token payload to form submissions to validate). Removes the possibility of XSS
  - CORS policies
  - Layered SQL with knex to prevent SQL abuse such as SQL injections
  - 2 Data Validator(backend and frontend) for the extreme data-filter pattern. Prevents dirty data from injecting to our precious database
  - Data Encryption on sensitive data such as government ids
  - Signed URLs. Validates a link provided to a user. It comes with expiry dates too!

    Example:
    - Forgot Password sends a link to the email provided. It has an expiry date of 15 mins and a signature payload. So a tampered input won’t be processed or expired.