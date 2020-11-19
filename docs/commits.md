---
id: commits
title: Commits
sidebar_label: Commits
slug: /documentations/commits
---

### Commits message format on published repositories

This is for production projects where it requires official patch notes. In this way, it'll be convenient for us to just carry over commit messages as patch notes.

> Note: Example: recruitment; ifix; ifix-mobile;

- A brief sentence that explains what is done
- Title Case format
- Separated with ";"

### Commits message format on non-published repositories

This refers to repositories that doesn't require patch notes

> Note: Example: docs; developers;

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

### Resources

- https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html
