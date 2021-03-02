---
slug: authentication-and-authorization-flow
title: Authentication and Authorization Flow
author: Christian Ryan Macarse
author_title: Full Stack Developer / DevOps
author_url: https://github.com/crrmacarse
author_image_url: /img/team-christian.svg
tags: [Authentication, Authorization, Backend, API]
---

> NOTE: Still WIP

## Introduction

Utilizes `passport-js`

## The Process Flow

Follows OAuth2 Specification

### Concerned Tables

table                   | description      |
------------------------| -----------------|
accounts                |
privileges              |
account_levels          |
account_level_privilege |

## Guards and Privileges

## Implementation

// todo

Designed to accept on top of existing account template.
You want a user to have a different privilege? Just create a new
account_level with its designated privileges(MnM) and give them the "id".

### Example

Given User1 is a previous applicant.

#### accounts

acc   | account_level_id |
------| -----------------|
user1 | 5                |

> NOTE: 5, because the template for applicant is "5".

```ts
export enum ACCOUNT_LEVEL_TEMPLATE {
  SUPERADMIN = 1,
  ADMIN = 2,
  MANAGER = 3,
  EMPLOYEE = 4,
  APPLICANT = 5,
  QA = 6,
}
```

And you want the user to be unique(Like only view one thing) and
not belong to the common template then create a new entry
in account_levels table.

#### account_levels table

id  | name      | template |
--- | --------- | -------- |
100 | User1Only | false    |

#### privileges table

code       | title      | type     |
---------- | ---------  | -------- |
read:hello | Read Hello | read     |

#### account_level_privilege table(MnM)

id  | account_level | privilege_code |
--- | ------------- | --------       |
98  | 1             | read:hello     |

And attach the new account_level id to the account

#### accounts table

acc   | account_level_id |
------| ---------------- |
user1 | 100              |


Tadaa! `user1` only has `read:hello` privilege.

Protecting a Controller should be easy as:

```ts
Privileges('read:hello')
fnc () { // only for acocunt with read:hello privilege }
```
