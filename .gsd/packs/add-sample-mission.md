# ShipSpec Context Pack

Use this as a compact, agent-neutral handoff for implementation, review, or follow-up planning.

## Active Change

- Title: Add sample mission
- Slug: add-sample-mission
- Branch: test-shipspec-operate-prompt

## Spec Files

- Proposal: openspec/changes/add-sample-mission/proposal.md
- Tasks: openspec/changes/add-sample-mission/tasks.md
- Acceptance criteria: present
- Verification plan: present

## Validation

- Spec validation: pass
- Ready validation: fail
- Validation gaps:
  - Verification evidence is missing. Run `gsd verify` first.

## Changed Files

- index.html
- src/app.js
- src/quest-board.js
- src/styles.css
- test/quest-board.test.js
- README.md

## Evidence Summary

- Evidence file: missing
- No verification evidence summary available.

## Risk

- Level: medium
- Verification evidence missing
- ready validation failing
- UI changed; consider screenshot or E2E proof
- next action pending: gsd operate

## Human Decisions

- No recorded human decisions.

## Next Action

- Command: gsd operate
- Reason: Operation report is missing for the active change.
- Also useful: gsd prompt
- Also useful: gsd verify --full
- Also useful: gsd ui

## Review Report

- .gsd/reports/add-sample-mission.md

## AI Instructions

- Read the spec files before proposing changes.
- Use the changed files and evidence summary to focus review.
- Call out missing verification, skipped checks, and risky affected areas.
- Keep implementation scoped to the active change.
- Do not deploy or access secrets from this pack.
