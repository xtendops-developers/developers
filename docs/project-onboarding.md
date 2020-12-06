---
id: project-onboarding
title: Project Onboarding
sidebar_label: Project Onboarding
slug: /project-onboarding
---

A quick guide to project onboarding. Make sure to **finish** reading all of the following before proceeding to a project.

## Setup SSH

We heavily rely with SSH so setting it up is a **must**.

```bash
# generate your key
$ ssh-keygen
```

If you don't want to type your password each time you use the key, you'll need to add it to the ssh-agent.

```bash
# start ssh-agent
$ eval $(ssh-agent) 

# ssh-add your private key file
$ ssh-add ~/.ssh/<private_key_file>    
```

Saving SSH key to your Github account(https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

```bash
# copy all contents of the public key which is to be pasted to your github account
cat ~/.ssh/<public_key_file>
```

Reference: https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh

## Git Configuration

```bash
# make sure your git config is set to the company email
git config -l

# set config
git config --local user.name USERNAME
git config --local user.email company@email.com
```

## Monday.com

Monday.com is our Project Management Platform. Make sure to update your tasks in there so higher-ups will receive updates.

A "time spent" and "time estimate" column can be found on the Project task board. You're *required* to log "time spent" for every task you're assigned. You will be asked for "time estimate" on sprint planning so make sure you're true to it as it won't be editable after.

### Duty Hours

Every week has `35h`(`7h`*5) of duty. A minimum of `30h` is alloted for task and `5h` for meeting, discussions and task updates.

A quota of `30h+` of accumulated "time estimate" from task is *required*. Upon sprint planning, you will be alloted near that amount. If it is short for the `30h` minimum, You must search for existing open issues found on other projects.

> The duty hour quota is enforced

Company Monday.com Link: https://xtendops-inc.monday.com/

## Issues and Pull Request

### Issues

Issues shown in github is the way to track the problems while using the code in repository. Anybody use the code can raise
issues and responsible people will take it forward to fix the problem after verifying. It can also be used to keep track of
tasks, enhancements for the code base.

> Make sure to assign yourself or someone else on an Issue(found on the upper right corner). Add corresponding labels, milestones,
and project if applicable. It is highly encourage to have discussion and give updates(Instead of doing it via chat which could be undocumtented).

> Linking Issues and Pull Request that could contribute/relate to the topic would also be nice!

### Pull request

Means that It let others know that you just made a change in the code to a repository and there is a request to
merge the changes to another branch. Interested collaborators can see the changes and suggest modifications in the code,
if the changes is acceptable, they can merge it to the branch requested.

> Ensure to add reviewers to your Pull Request. While assigned to be a reviewer on a PR, approving it will held you partly responsible.
So make sure you've indeed reviewed it!

TIP: You can tag an Issue or Pull Request in the comment section by `#{id}`

## Github Wiki

Github Wiki is a per repository documentation. It includes project details; links; and configurations. Make sure to check it
out if you're lost or needed something in a project.

## Branch Naming Convention

<table>
  <thead>
    <tr>
      <th>Instance</th>
      <th>Branch</th>
      <th>Description, Instructions, Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Working</td>
      <td>master</td>
      <td>A fast-paced branch that all branches should merged into; Releases are made here</td>
    </tr>
    <tr>
      <td>Features/Issues</td>
      <td>feature/id?-name</td>
      <td>Always branch off HEAD of Working</td>
    </tr>
    <tr>
      <td>Bugfix</td>
      <td>bugfix/id?-name</td>
      <td>Always branch off HEAD of Working</td>
    </tr>
    <tr>
      <td>Hotfix</td>
      <td>hotfix/*</td>
      <td>Must branch out of latest Release commit; Needed to be work on ASAP</td>
    </tr>
  </tbody>
</table>

Further Reading: https://github.com/xtendops-developers/docs/blob/master/branch.md

## Commit Guidelines

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

#### Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

> Great commit summaries contain fewer than 50 characters :)

## README

This file(`README.md`) could be found in the root of every projects. This must be read thoroughly as it tries to give
vital information about the project.

- ### Stack
  Provides a list tech stack of the Project. Make sure you have at least a good amount of knowledge for all
  the stacks that have been declared here before proceeding.

- ### Installation
  A guide on how to initialize the project.

- ### Development
  Set of commands to guide on how to bootstrap the project for development

- ### Testing
  Guide on how to test

- ### Production
  How to prepare the application for production

- ### Known Issues
  A list of known issues

- ### Resources
  A list of links that could be useful or have been utilized by the Project.

- ### Contributors

  A list of developers who've contributed.

## Closing

- Apply KISS and DRY patterns
- Check for line authors to know where to address your question
- More here...

---

If you have any concerns and questions, please contact the development team

Read our Developer Guidelines [here](https://docs.google.com/document/d/1CrRmbC_h1-Mj3hAIxGKVUUoG6kRUFgR4s2Ivn-LIo9A/edit) or visit our website via https://developers.xtendops.us/
