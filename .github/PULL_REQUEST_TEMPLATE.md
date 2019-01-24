<!--
Thank you for your pull request!

Provide a general summary of your changes in the Title above. Do not include any task numbers.
Use imperative, present tense: "Change" not "Changed" nor "Changes". This will become a correct final merge commit message 😄
The imperative tells someone what merging the PR **will do**, rather than **what you did**.
-->

**Release Type:** *RELEASE_TYPE* <!-- Refer to the wiki https://github.com/x-team/auto/wiki/Release-Process#types-of-releases -->
<!--
Basic types are:
  - Bug fix (non-breaking change which fixes an issue)
  - Dev Improvements (these changes make life easier for devs but have no noticeable impact on end-users)
  - Non-Breaking Feature (adding a new feature without affecting any existing features)
  - Breaking Changes (fix or feature that would cause existing functionality to not work as expected)
-->

Fixes https://x-team-internal.atlassian.net/browse/XP-[ISSUE_NUMBER]

## Description

<!-- Provide several sentences describing the overall goals of the pull request's changes. -->

## Checklist

**Before submitting a pull request,** please make sure the following is done:

<!-- Remove items that do not apply. Just tick completed items in UI -->
- [ ] set yourself as an assignee
- [ ] set appropriate labels for a PR (`In Review` or `In Progress` depending on its status)
- [ ] move respective JIRA issue to the `IN REVIEW` column
- [ ] make sure your code lints (`npm run lint`)
- [ ] Flow typechecks passed (`npm run flow`)
- [ ] Snapshots tests passed (`npm run jest`)
- [ ] check cleanup tasks (https://github.com/x-team/auto/labels/cleanup) and take a suitable small one (if exists) in a related area of the current changes
- [ ] component's documentation (`.stories.js` file) is changed or added accordingly to reflect any new or updated use cases or variants usage
- [ ] if you've fixed a bug, make sure to also include a new story that will expose declarations with problematic data that caused the bug in the first place, so that we can assure that no regressions will pop up on future interactions
- [ ] if you've fixed a bug or added code that should be tested, add unit tests
- [ ] if any snapshots have been changed, verify that component still works and looks as expected and update the changed snapshot
- [ ] **manually tested the component** by running it in the browser and checked nothing is broken and operates as expected!

## Related PRs

<!-- List related PRs against other Auto repos if applicable: -->

branch | PR
------ | ------
auto_branch_name | [Auto](https://github.com/x-team/auto/pull/X)
auto_api_branch_name | [Auto API](https://github.com/x-team/auto-api/pull/X)

## Steps to Test or Reproduce

<!-- Outline the steps for the reviewer to test or reproduce the PR here and specifically how you tested your changes. -->

## Impacted Areas in Application

<!-- List general components of the application that this PR will affect. -->

## Screenshots

<!-- Provide if appropriate -->
