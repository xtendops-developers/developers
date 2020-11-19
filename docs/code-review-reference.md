---
id: code-review-reference
title: Code Review Reference
sidebar_label: Code Review Reference
slug: /documentations/code-review-reference
---

A masterlist of code review to make it easy for developers to pull up as reference.

[Proceed to Masterlist](#masterlist)

## Things to remember

* There is no perfect code: good enough is usually good enough. That being said, try to keep the number of WTFs per minute to a minimum.

    ![](https://i2.wp.com/commadot.com/wp-content/uploads/2009/02/wtf.png?w=550)

* Accept that many programming decisions are opinions.  Discuss tradeoffs, which you prefer, and reach a resolution quickly.
* Ask for clarification. ("I didn't understand. Can you clarify?")
* Offer clarification, explain the decisions you made to reach a solution in question.
* Avoid using terms that could be seen as referring to personal traits. ("dumb", "stupid"). Assume everyone is intelligent and well-meaning.
* Be humble. ("I'm not sure - let's look it up.")
* Don't use hyperbole. ("always", "never", "endlessly", "nothing") Don't use sarcasm.
* Remember that you're both on the same side - the goal is to make the code better. Understand that sometimes your ideas will be overruled. Even if you do turn out to be right, don't take revenge or say, "I told you so".
* Talk synchronously (e.g. chat, screensharing, in person) if there are too many "I didn't understand" or "Alternative solution:" comments. Pull requests should not be the place for long discussions, architectural or otherwise.
* Put notes on what's missing or could be improved in the PR description or comments. You can also make a Trello card with discussions points and possible problems or things to do and discuss it offline.

## As a code submitter

* PRs should be about one thing. If you do multiple things in one PR, it's hard to review. If you're fixing stuff as you go, you might want to make atomic commits and then cherry-pick those commits into separate branches, leaving the PR clean.
* Try to keep the PRs small. There has been some research to indicate that beyond 400 LOC the ability to detect defects diminishes. (We're talking about LOC proper, unit tests and layouts don't count)
* Having a PR description is useful. Additionally, you can also link to the card on Trello.
* Ideally, the PR should be finished when submitted. If the PR is work in progress, add (WIP) or [WIP] to the title. 
* You should have tests that at least cover the logic, and ideally also cover the input/output parameters and methods. (depends on context)

## As a reviewer

* Reviewing code is part of a normal workday. You should check for open/updated PRs at least once a day. 
* Ask, don’t tell. (“What do you think about trying…?” rather than “Don’t do…”)
* Offer ways to simplify or improve code.
* Code beautification and refactoring ought to be tasks in the next sprint, except for obvious and easy-to-fix things.
* Communicate which ideas you feel strongly about and those you don't. Explain your reasons why code should be changed. (Not in line with the style guide? A personal preference?)
* If you disagree strongly, consider giving it a few minutes before responding; think before you react.
* Offer alternative implementations, but assume the author already considered them. ("What do you think about using a custom validator here?")
* If discussions turn too theoretical or touch big architectural questions, move the discussion offline. In the meantime, let the author make the final decision on alternative implementations.
* Don't keep the code hostage. Keep in mind the context and the most important thing - does it work?

## Responding to feedback

* Try to respond to every comment. Be grateful for the reviewer's suggestions. ("Good call. I'll make that change.")
* Be aware of how hard it is to convey emotion online and how easy it is to misinterpret feedback. If a review seems aggressive or angry or otherwise personal, consider if it is intended to be read that way and ask the person for clarification of intent, in person if possible.
* Link to any follow up commits or Pull Requests. (“Good call! Done in 1682851”)
* Wait to merge the branch until Continuous Integration tells you the test suite is green in the branch. Merge once you feel confident in the code and its impact on the project.

## Masterlist

> TIP: Clicking the `#` beside the title will create an appended URL link. The generated URL will provide a redirect to the section.

Table of Contents

<!--  -->
* [1.0 General](#1.0-general)
* [2.0 Frontend](#2.0-frontend)
* [3.0 Backend](#3.0-backend)
* [4.0 DevOps](#4.0-devops)
* [5.0 Security](#5.0-security)
* [6.0 Testing](#6.0-testing)
* [7.0 Database](#7.0-database)
* [8.0 Blacklisted](#8.0-blacklisted)

### 1.0 General

---

* 1.1 Apply KISS principle

    KISS, an acronym for &quot;keep it simple, stupid&quot; or &quot;keep it stupid simple&quot;, is a design principle noted by the U.S. Navy in 1960. The KISS principle states that most systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design, and unnecessary complexity should be avoided. The phrase has been associated with aircraft engineer Kelly Johnson. The term &quot;KISS principle&quot; was in popular use by 1970. Variations on the phrase include: &quot;Keep it simple, silly&quot;, &quot;keep it short and simple&quot;, &quot;keep it simple and straightforward&quot;, &quot;keep it small and simple&quot;, or &quot;keep it stupid simple&quot;.

    refer: https://en.wikipedia.org/wiki/KISS_principle

* 1.2 BEM Model

    We utilize the BEM model in our CSS naming convention. BEM stands for Block, Element, and Modifier. It’s a CSS naming convention for writing cleaner and more readable CSS classes.

    refer: http://getbem.com/introduction/ | https://codeburst.io/understanding-css-bem-naming-convention-a8cca116d252

* 1.3 DRY(Don't Repeat Yourself)

    Don&#39;t repeat yourself (DRY, or sometimes do not repeat yourself) is a principle of software development aimed at reducing repetition of software patterns, replacing it with abstractions or using data normalization to avoid redundancy. The DRY principle is stated as &quot;Every piece of knowledge must have a single, unambiguous, authoritative representation within a system&quot;. The principle has been formulated by Andy Hunt and Dave Thomas in their book The Pragmatic Programmer. They apply it quite broadly to include &quot;database schemas, test plans, the build system, even documentation&quot;. When the DRY
    principle is applied successfully, a modification of any single element of a system does not require a change in other logically unrelated elements. Additionally, elements that are logically related all change predictably and uniformly, and are thus kept in sync. Besides using methods and subroutines in their code, Thomas and Hunt rely on code generators, automatic build
    systems, and scripting languages to observe the DRY principle across layers.

    refer: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

* 1.4 JSDoc

    Is a docuentation pattern widely used by the open source community. JSDoc's purpose is to document the API of your JavaScript application or library. It is assumed that you will want to document things like modules, namespaces, classes, methods, method parameters, and so on.

    Sample Usage:

    ```ts
    /**
    * Represents a book.
    * @constructor
    * @param {string} title - The title of the book.
    * @param {string} author - The author of the book.
    */
    function ExampleFunction(title, author) {
    }
    ```

    If your codebase is geared towards scaling. Make sure to utilize this approach.

    Read more here: https://jsdoc.app/

* 1.5 Naming Conventions
  * Functions should be in camelCaseFormat
  * Constants should be in UPPER_CASE_FORMAT
  * Local Variables should be in camelCaseFormat
  * Classes should be in TitleCaseFormat

* 1.6 ESLint rules

    We highly abide the eslint configuration usually found in the root folder. Usage of `eslint-disable` should be minimize.

* 1.7 Follow the existing folder structure. If you have revision or addition. Please consult the team for approval.

* 1.8 Commit pattern

    refer: https://github.com/xtendops-developers/docs/blob/master/commits.md

* 1.9 Branch naming

    refer: https://github.com/xtendops-developers/docs/blob/master/branch.md

* 1.10 Versioning follows Semver format

    refer: https://semver.org/

* 1.11 Comment tagging

    To make it easier for us to search existing todos or bug in the code base. Kindly follow the folloing tagging format:

    ```ts
    /*
    * @TODO | @NOTE | @BUG
    *
    * Description of the above
    */
    ```

* 1.12 Parent vs Child Import

    ```ts
    import Parent from 'parent/comp'; // top part
    import Parent2 from 'parent2/comp2/another2';
    import Child from './child'; // always at the bottom
    import Child rfom './child/another';
    ```

* 1.12 Line break should not exceed > 1

    ```ts
    const val = 1;

                    // <------ excessive line break. Remove this line.
    const fnc = () => {};
    ```

* 1.13 Interface should be singular.

    So it'll look like this:

    ```ts
    const account: Account;
    const accounts Account[];

    // Not this:
    const account: Accounts;
    const accounts Accounts[];
    ```

* 1.14 Make use of lodash for your helper function needs

    https://lodash.com/

### 2.0 Frontend

---

* 2.1 Shared vs Common vs Partials

    ```ts
    components
        container_folder
            common // <--- shared within container group(ex: admin only)
                common_comp
                    index.tsx
            component_1
                partials // <--- aka supporting component
                    partial_comp.tsx
                index.tsx
        shared // <--- shared across all containers(public, admin)
            shared_comp
                index.tsx
    ```

* 2.2 Import Pattern

    ```ts
    import React from 'react'; // always import high level(eg: react, react-redux, react-router-doom)
    import CONSTANT_VALUE from 'constants/constant_value';
    import SharedComponent from 'components/shared/shared-comp1';
    import CommonComponent from 'container-folder/container-folder/common/common-comp';
    import helperFunction from 'utils/helper';
    import globalStyles from 'styles/global';
    import PartialComponent from './partials/partial-comp';
    import subHelperFunction from './helper.tsx'
    import styles from './styles';
    ```

* 2.3 Component names should be in `TitleCase` format.

* 2.4 Use `Fragment` instead of `<>`

* 2.5 Importing material-ui

    To optimize the bundle producted by `material-ui`. They have suggested to follow this import pattern

    ```ts
    import { Button, TextField } from '@material-ui/core'; // importing cores
    import { makeStyles, createStyles } from '@material-ui/core/styles'; // import styles
    import AddIcon from '@material-ui/icons/Add'; // importing icons
    ```

    refer: https://material-ui.com/guides/minimizing-bundle-size/

* 2.6 Prefix container and parent name in all components that isn't shareable.

    ```ts
    const ContainerNameComponentName = () => {};

    const ContainerNameParentNamePartialName = () => {}'
    ```

    If it is under `forms/`, Append `Form` in front of `ContainerName`

    ```ts
    const FormContainerNmaeComponentName
    ```

    > This will greatly help us in terms of stack tracing

    ```ts
    // Example scenario of stack tracing

         _____ under "admin" container
        |
    FormAdminProfilePersonal <--- under "personal" partials
    ^             ^
    |             |_______________ under "profile" form component
    | 
    |__ under "forms" folder
    ```

* 2.7 Shareable functions should be stored under `utils` folder

* 2.8 The `providers` folder is intended for library injections.

* 2.9 We split React components in 2 types. Forms and Usual components. Usual components should be found under `components` folder while Forms should be under `forms` folder. Anything that tackles with regards to form submission(Usually if there is anything `<form>` or `react-final-form` in a component) is considered Form.

* 2.10 Redux Actions should be in `TITLE_CASE` format.

    Example:

    ```ts
    const FETCH_USER_SAGAS = 'FETCH_USER_SAGAS';
    ```

* 2.11 Parent reeducers should be named in `snakeCase` format and must be singular.

### 3.0 Backend

---

* 3.1 Patterns

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate metus nulla, sit amet pharetra dolor sagittis in. Sed eget velit sed lectus posuere luctus ut id magna. Proin aliquam diam eu vulputate facilisis. Curabitur sollicitudin egestas consequat. Duis sit amet neque est. Ut eu tellus eros. Mauris semper mattis diam. Maecenas tortor quam, tempus molestie dolor eu, posuere luctus turpis. Proin ut nibh id elit dapibus vehicula eu sed urna. Proin congue dictum elit, lacinia porttitor nisi ultrices a. Curabitur vitae neque eu sem pellentesque gravida. Fusce sodales nisi vel faucibus luctus.

* 3.2 Hello World

    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas aliquet ultrices eleifend. Fusce aliquam aliquam felis non tempor. Nulla neque lorem, ornare ac purus vitae, volutpat semper arcu.

    ```ts
    import Hello from 'world';
    ```

* 3.3 Controller routes should always be in plural form

    ```bash
    GET /examples ✅
    GET /examples/1 ✅

    GET /example ❌ # The problem arises here, this route servers multiple data but states itself as singular
    GET /example/1 ❌
    ```

### 4.0 Security

---

* 4.1 Test

    Ut eu tellus eros. Mauris semper mattis diam. Maecenas tortor quam, tempus molestie dolor eu, posuere luctus turpis. Proin ut nibh id elit dapibus vehicula eu sed urna. Proin congue dictum elit, lacinia porttitor nisi ultrices a. Curabitur vitae neque eu sem pellentesque gravida. Fusce sodales nisi vel faucibus luctus. 

    ```ts
    import Hello from 'world';
    ```

* 4.2 Hello World

    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas aliquet ultrices eleifend. Fusce aliquam aliquam felis non tempor. Nulla neque lorem, ornare ac purus vitae, volutpat semper arcu.

    ```ts
    import Hello from 'world';
    ```

### 5.0 DevOps

---

* 5.1 Test

    Ut eu tellus eros. Mauris semper mattis diam. Maecenas tortor quam, tempus molestie dolor eu, posuere luctus turpis. Proin ut nibh id elit dapibus vehicula eu sed urna. Proin congue dictum elit, lacinia porttitor nisi ultrices a. Curabitur vitae neque eu sem pellentesque gravida. Fusce sodales nisi vel faucibus luctus. 

    ```ts
    import Hello from 'world';
    ```

* 5.2 Hello World

    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas aliquet ultrices eleifend. Fusce aliquam aliquam felis non tempor. Nulla neque lorem, ornare ac purus vitae, volutpat semper arcu.

    ```ts
    import Hello from 'world';
    ```

### 6.0 Testing

---

* 6.1 Testing approaches

    ```ts
    import Hello from 'world';
    ```

### 7.0 Database

---

* 7.1 Primary key should always be named `id`. It should be Incremental, Unique and Not Nullable.

* 7.2 Tables should be in plural form, lowercase, and under_score format.

    ```bash
    account ❌
    accountUser ❌
    Account ❌

    accounts ✅
    account_user ✅
    ```

* 7.3 Primary and Foreign keys should be together at the top most part. Lower part should be timestamps and boolean values

* 7.4 Routes should be in `kebab-case` format

### 7.0 Blacklisted

---

* 7.1 Redux-Form

    Message from Redux-Form:

    If you're just getting started with your application and are looking for a form solution, the general consensus of the community is that you should not put your form state in Redux. The author of Redux Form took all of the lessons he learned about form use cases from maintaining Redux Form and built 🏁 React Final Form, which he recommends you use if you are just starting your project. It's also pretty easy to migrate to from Redux Form, because the `<Field>` component APIs are so similar. Here is a blog post where he explains his reasoning, or there are two talks if you prefer video. Formik is also a nice solution.

    The only good reason, in the author's view, to use Redux Form in your application is if you need really tight coupling of your form data with Redux, specifically if you need to subscribe to it and modify it from parts of your application far from your form component, e.g. on another route. If you don't have that requirement, use 🏁 React Final Form.

    > Alternatives: `react-final-form`

* 7.2 MomentJS

    From MomentJS:

    Moment.js is a legacy project, now in maintenance mode. In most cases, you should choose a different library.

    > Alternatives: `datefns`

* 7.3 JQuery

    Outdated

    > Alternatives: Vanilla Javascript

* 7.4 Bootstrap v4

    Includes unnecessary JQuery that could bloat the build.

    > Alternatives: `tailwind-css`, `scss`, `jss`

* 7.5 ChartJS

    Big library

    > Alternatives: `devexpress`

## Resources

* https://gist.github.com/mrsasha/8d511770ad9b282f3a5d0f5c8acdd10e