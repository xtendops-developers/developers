---
id: contributors-guide
title: Contributors Guide
sidebar_label: Contributors Guide
slug: /docs/contributors-guide
---

This talks about README Contributors section found on every project's README. We're utilzing `all-contributors` for handling our contribution docs.

refer: https://allcontributors.org/

## Usage

### `@all-contributors add`

 Comment on Issue or Pull Request, asking @all-contributors to add a contributor:

```bash
@all-contributors please add <username> for <emoji_key_name>
```

> refer below for valid `<emoji_key_name>`

The bot will then create a Pull Request to add the contributor, then reply with the pull request details.

<img alt="Example usage screenshot" src="https://raw.githubusercontent.com/all-contributors/all-contributors/master/docs/assets/bot-usage.png" width="500px" />

> Your request to the bot doesn't need to be perfect. The bot will use [basic Natural Language Parsing](https://github.com/all-contributors/all-contributors-bot/blob/master/src/tasks/processIssueComment/utils/parse-comment/index.js) to determine your intent.
> For example, this will work too:
>
> `Sandpipers you are crushing it in documentation and your infrastructure work has been great too. Let's add sandpipers.69 for her contributions. cc @all-contributors`

## Emoji Equivalent

> To have a contribution added when using the Bot or CLI use the keyword in the `Type` column. The bot will also use [basic Natural Language Parsing](https://github.com/all-contributors/all-contributors-bot/blob/master/src/tasks/processIssueComment/utils/parse-comment/index.js) to determine your contribution intent.

Emoji/Type | Represents | Comments
:---: | :---: | :---:
🔊 <br /> `audio` | Audio | Podcasts, background music or sound effects
♿️ <br /> `a11y` | Accessibility | Reporting or working on accessibility issues
🐛 <br /> `bug` | Bug reports | Links to issues reported by the user on this project
📝 <br /> `blog` | Blogposts | Links to the blogpost
💼 <br /> `business` | Business Development | People who execute on the business end
💻 <br /> `code` | Code | Links to commits by the user on this project
🖋 <br /> `content` | Content | e.g. website copy, blog posts are separate
🔣 <br /> `data` | Data | Links to contributed data for the project (both tests and datasets)
📖 <br /> `doc` | Documentation | Links to commits by the user on this project, Wiki, or other source of documentation
🎨 <br /> `design` | Design | Links to the logo/iconography/visual design/etc.
💡 <br /> `example` | Examples | Links to the examples
📋 <br /> `eventOrganizing` | Event Organizers | Links to event page |
💵 <br /> `financial` | Financial Support | People or orgs who provide financial support, links to relevant page
🔍 <br /> `fundingFinding` | Funding/Grant Finders | People who help find financial support
🤔 <br /> `ideas` | Ideas & Planning | |
🚇 <br /> `infra` | Infrastructure | Hosting, Build-Tools, etc. Links to source file (like `travis.yml`) in repo, if applicable
🚧 <br /> `maintenance` | Maintenance | People who help in maintaining the repo, links to commits by the user on this project
🧑‍🏫 <br /> `mentoring` | Mentoring | People who mentor new contributors, links to the repo home
📦 <br /> `platform` | Packaging | Porting to support a new platform |
🔌 <br /> `plugin` | Plugin/utility libraries | Links to the repo home
📆 <br/> `projectManagement` | Project Management | |
💬 <br /> `question` | Answering Questions | Answering Questions in Issues, Stack Overflow, Gitter, Slack, etc.
👀 <br /> `review` | Reviewed Pull Requests | |
🛡️ <br /> `security` | Security | Identify and/or reduce security threats, GDPR, Privacy, etc
🔧 <br /> `tool` | Tools | Links to the repo home
🌍 <br /> `translation` | Translation | Links to the translated content
⚠️ <br /> `test` | Tests | Links to commits by the user on this project
✅ <br /> `tutorial` | Tutorials | Links to the tutorial
📢 <br /> `talk` | Talks | Links to the slides/recording/repo/etc
📓 <br /> `userTesting` | User Testing | Links to user test notes
📹 <br /> `video` | Videos | Links to the video
