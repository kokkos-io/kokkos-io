# Off Piste [![Netlify Status](https://api.netlify.com/api/v1/badges/e79c8162-e725-497b-a8ac-2f25b4182339/deploy-status)](https://app.netlify.com/sites/off-piste/deploys)

[Documentation](https://www.notion.so/kokkos/Off-Piste-857d4f76386a460baaa8475a535b7ee0), [Tasks](https://www.notion.so/kokkos/e83f214ed5784843ac12f106e0882803?v=0772d40f2c5142d591eecb2eb6a21826), and [Chat](https://discord.gg/zEpAvSB)

### Prerequisites

Open the root folder for the workspace settings to take effect (must use VSCode)

`$ cd off-piste/ && code .`

Install these VSCode extensions to get proper syntax highlighting

- `octref.vetur` for Vue (must have)
- `bradlc.vscode-tailwindcss` for Tailwind (should have)
- `luyizhi.vscode-graphql` for GraphQL (should have)

Run VSCode command `Vetur: Generate grammar from 'vetur.grammar.customBlocks` to enable gql syntax highlighting in `<page-query>` and `<static-query>` tags

### Notes

- gridsome HMR injects stylesheets multiple times in development for some reason, maybe on purpose 🤷‍♂️. It's not included in production though

### Who's responsible?

Probably [Tobias](mailto:tobias@kokkos.io) - contact him 👍
