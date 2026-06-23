# Add quest completion and XP rewards Verification Evidence

Mode: full
Generated: 2026-06-23T05:25:22.849Z

## Checks

### lint

Command: `npm run lint`
Result: pass
Required: yes

```text
> pixel-quest-board@0.1.0 lint
> node --check src/quest-board.js && node --check src/app.js && node --check test/quest-board.test.js
```

### unit

Command: `npm test`
Result: pass
Required: yes

```text
> pixel-quest-board@0.1.0 test
> node --test

✔ completing an open quest marks it complete and awards its XP once (1.60175ms)
✔ completing an unknown quest reports a clear failure (0.197083ms)
ℹ tests 2
ℹ suites 0
ℹ pass 2
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 83.316125
```

### typecheck

Command: `npm run typecheck`
Result: pass
Required: yes

```text
> pixel-quest-board@0.1.0 typecheck
> node --check src/quest-board.js && node --check src/app.js && node --check test/quest-board.test.js
```

### e2e

Command: `npm run test:e2e`
Result: pass
Required: no

```text
> pixel-quest-board@0.1.0 test:e2e
> node --test

✔ completing an open quest marks it complete and awards its XP once (1.3015ms)
✔ completing an unknown quest reports a clear failure (0.184417ms)
ℹ tests 2
ℹ suites 0
ℹ pass 2
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 79.48925
```

