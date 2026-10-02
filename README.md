# My Test Project 2

ServiceNow Fluent application built with the Now SDK.

## Application

- Scope: `x_890105_test_prj2`
- SDK: `4.13.3`
- Includes an incident on-load client script and an incident update business rule.

## Local development

1. Install Node.js and npm, then run `npm install` from the repository root.
2. Run `npm run build` to compile the application.
3. Configure your own ServiceNow credentials with `npx now-sdk auth`.
4. When ready to install the application on your configured instance, run `npm run deploy`.

Use `npm run transform` to pull instance-side changes into Fluent source. Commit or stash local changes first because this can overwrite them.

## Source control

Commit application source, configuration, the npm lockfile, and the SDK-generated
`src/fluent/generated/keys.ts` file when present. The keys file preserves ServiceNow
record identities across builds and team members.

Dependencies, build output, local SDK credentials, and environment files are excluded
from Git. Never commit passwords, tokens, or instance credentials.