# ShipSpec Context Pack

Use this as a compact, agent-neutral handoff for implementation, review, or follow-up planning.

## Active Change

- Title: Your feature
- Slug: your-feature
- Branch: test-shipspec-operate-prompt

## Spec Files

- Proposal: openspec/changes/your-feature/proposal.md
- Tasks: openspec/changes/your-feature/tasks.md
- Acceptance criteria: present
- Verification plan: present

## Validation

- Spec validation: pass
- Ready validation: pass

## Changed Files

- index.html
- src/app.js
- src/quest-board.js
- src/styles.css
- test/quest-board.test.js
- README.md

## Evidence Summary

- Evidence file: .agent/evidence/your-feature.md
- Verified: lint passed
- Verified: unit passed
- Verified: typecheck passed
- Verified: e2e passed
- Skipped: None
- Risk: No verification risks detected from configured checks.

## Risk

- Level: medium
- verification skipped checks
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

- .gsd/reports/your-feature.md

## AI Instructions

- Read the spec files before proposing changes.
- Use the changed files and evidence summary to focus review.
- Call out missing verification, skipped checks, and risky affected areas.
- Keep implementation scoped to the active change.
- Do not deploy or access secrets from this pack.
