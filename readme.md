# Getting Started

Create a Fauna database with sample data, generate a Fauna Server Key, and configure an Environment Variable in Netlify with your Fauna Server Key.

## Fauna

1. Sign up for a free [Fauna Account](https://dashboard.fauna.com/accounts/register).
2. Create a new Fauna Database from the [Fauna Dashboard](https://dashboard.fauna.com/) giving it a name, selecting a region, and checking the box for `Use demo data`.

   ![Fauna Create Database use Demo Data](screenshots/fauna-create-database-use-demo-data.png)

3. Navigate into your new database and to the `Security` section using the navigation on the left side.
4. From the `Security > Keys` page click `New Key` to generate a new Fauna Server Key.

   ![Fauna Create Server Key](screenshots/fauna-create-server-key.png)

5. The Fauna Server Key will be displayed and you will need this value in the next section so keep this page open or copy it somewhere safe.

   ![Fauna Server Key Secret](screenshots/fauna-server-key-secret.png)

## Netlify

1. Sign up for a free [Netlify Account](https://app.netlify.com/signup).
2. Click the `Deploy to Netlify` button below:

   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/BNR-Developer-Sandbox/BNR-blog-composable-solutions)

3. Click `Connect to GitHub` and grant any authorizations needed.

   ![Netlify Connect to GitHub](screenshots/netlify-connect-to-github.png)

4. Configure your site by entering your Fauna Server Key generated in the previous section in the field labeled `Replace with generated Fauna Server Key`.

   ![Netlify Configure your Site](screenshots/netlify-configure-your-site.png)

5. Click `Save & Deploy`
6. Netlify will build and deploy your new Netlify Site with a custom subdomain under `netlify.app`.
7. In Netlify, navigate to `Site settings > Build & deploy > Environment > Environment variables` to find where your `FAUNA_SERVER_KEY` was saved.

   ![Netlify Environment Variables](screenshots/netlify-environment-variables.png)

## GitHub Actions

Your repository must be hosted on GitHub in order to use [GitHub Actions](https://docs.github.com/en/actions).
GitHub looks for GitHub Actions workflows in the `.github/workflows/` directory.

1. Go to your GitHub and find your new repository.
2. Navigate to the `Settings` tab.
3. Expand the `Secrets` options from the left side menu.
4. Click `Actions` to navigate to the `Actions secrets` page.
5. Click `New repository secret` to create new secret.

   ![GitHub Actions New repository secret](screenshots/github-actions-new-secret.png)

6. Enter `FAUNA_SERVER_KEY` as the secret name, enter your Fauna Server Key in the secret field, and click `Add secret`.
7. You will now see your new repository secret listed on the `Action secrets` page.

   ![GitHub Actions New repository secret](screenshots/github-actions-repository-secrets.png)

8. Navigate to the `Actions` tab to view all workflows.
9. Click on the `Continuous Integration` workflow in the left side navigation to go to the Continuous Integrations workflow page.
10. Expand the `Run workflow` dropdown and click the `Run workflow` button.

    ![GitHub Actions Continuous Integration](screenshots/github-actions-continuous-integration.png)

11. Your workflow run will be queued and begin running. Click through to view details on the GitHub actions job run.

# Local Development

1. Install dependencies with `npm install`
2. Login to Netlify with `npx netlify login`
3. Link your Netlify Site `npx netlify link`
4. Start the local development server `npm start`

## Netlify

[Netlify Dev](https://cli.netlify.com/netlify-dev/) is used to start the local development server which will inject Netlify Environment Variables from your linked Netlify Site and start the Stencil development server.
[Netlify Functions](https://docs.netlify.com/functions/build/?fn-language=js) are defined in the `api/` directory as configured in `netlify.toml`.

## Stencil

[Stencil](https://stenciljs.com/docs/introduction) is a compiler for Web Components / Custom Elements.
[Custom Elements Everywhere](https://custom-elements-everywhere.com/) is a website that tests and documents the interoperability of Custom Elements with other web frameworks.

## Local Shared Module

There is a local shared module called `core` in the `core/` directory at the root of this repository.
Notice that `core` is installed as a dependency in `package.json` using `"core": "file:./core"` to reference the local file path.
This `core` module is also installed in the `.github/workflows/package.json` and `api/` directories.
Search the code base for [import core from 'core/index.js'](https://github.com/BNR-Developer-Sandbox/BNR-blog-composable-solutions/search?q=import+core+from+core%2Findex.js) to see how this module is being using in GitHub Actions (`.github/workflows`), Netlify Functions (`api/`), and Stencil (`src/`).

# Scaffolding

This project was scaffolding using the Stencil and Netlify CLIs.

## Stencil Initialization

[Stencil: Getting Started - Starting a new project](https://stenciljs.com/docs/getting-started)

Stencil was initialized with `npm init stencil` using the `ionic-pwa` starter.

## Netlify CLI Installation

[Netilfy CLI: Getting Started - Installation in a CI environment](https://docs.netlify.com/cli/get-started/#automated-setup)

Netlify CLI was installed locally with `npm install netlify-cli --save-dev`.

## Netilfy CLI Initialization

[Netilfy CLI: Getting Started - Automated setup](https://docs.netlify.com/cli/get-started/#automated-setup)

Netlify CLI was initialized with `npx netlify-cli init`.
