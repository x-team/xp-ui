<!--
Thank you for your pull request!

Provide a general summary of your changes in the Title above. Do not include any task numbers.
Use imperative, present tense capitalising the first letter: "Change" not "Changed" nor "changes". This will become a correct final merge commit message 😄
The imperative tells someone what merging the PR **will do**, rather than **what you did**.
An example: "Refactor code for readability".
-->

**Release Type:** *RELEASE_TYPE* <!-- Refer to the wiki for more details https://github.com/x-team/xp/wiki/Release-Process#types-of-releases -->
<!--
Basic types are:
  - Bug Fix (non-breaking change which fixes an issue)
  - Dev Improvement (these changes make life easier for devs but have no noticeable impact on end-users)
  - UI Improvement (visual UI changes that don't assume radical changes or extra new functionality)
  - Documentation (updating and/or enhancing existing documentation)
  - Non-Breaking Feature (adding a new feature without affecting any existing features)
  - Breaking Change (fix or feature that would cause existing functionality to not work as expected)
-->

Fixes https://x-team-internal.atlassian.net/browse/XP-__ISSUE_NUMBER__

## Description

<!-- Provide several sentences describing the overall goals of the pull request's changes. -->

## Checklist

**Before submitting a pull request,** please make sure the following is done:

<!-- Remove items that do not apply. Just tick completed items in UI -->
- [ ] set yourself as an assignee
- [ ] set appropriate labels for a PR (`In Review` or `In Progress` depending on its status)
- [ ] move respective JIRA issue to the `PEER REVIEW` column
- [ ] make sure your code lints (`npm run lint`)
- [ ] Flow typechecks passed (`npm run flow`)
- [x] Snapshots tests passed (`npm run jest`) (**NOTE:** This is temporarily disabled. Skip it.)
- [ ] check cleanup tasks (https://github.com/x-team/xp/labels/cleanup) and take a suitable small one (if exists) in a related area of the current changes
- [ ] if added a new UI component that is meant to be used directly by other apps, remember to export that from the appropriate bundle file: `src/index.js` and/or `src/registration.js`
- [ ] component's documentation (`.stories.js` file) is changed or added accordingly to reflect any new or updated use cases and/or debug cases
- [ ] if you've fixed a bug, make sure to also include a new story that will expose declarations with problematic data that caused the bug in the first place, so that we can assure that no regressions will pop up on future interactions
- [x] if any snapshots have been changed, verify that component still works and looks as expected and update the changed snapshot (**NOTE:** This is temporarily disabled. Skip it.)
- [ ] once finished with all the changes, you run `npm run build` command and committed changed files to the branch
- [ ] **manually tested the app** by running it in several different browsers (Firefox, Chrome, Opera, Safari, MS IE/Edge, etc.) and checked nothing is broken and operates as expected!

## Related PRs

<!-- List related PRs against other XP repos if applicable: -->

branch | PR
------ | ------
xp_branch_name | [XP](https://github.com/x-team/xp/pull/X)
xp_registration_branch_name | [XP Registration](https://github.com/x-team/xp-registration/pull/X)
xp_api_branch_name | [XP API](https://github.com/x-team/xp-api/pull/X)

## Steps to Test or Reproduce

<!-- Outline the steps for the reviewer to test or reproduce the PR here and specifically how you tested your changes. -->

## Impacted Areas in Application

<!-- List general components of the application that this PR will affect. -->

## Screenshots

<!-- Provide if appropriate -->
