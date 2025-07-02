# GitHub Actions Workflows

This directory contains GitHub Actions workflows for the Aether UI Kit project.

## Storybook Deployment

### `storybook-deploy.yml`

This workflow automatically deploys the Storybook documentation to GitHub Pages.

**Triggers:**
- Push to `main` branch
- Manual trigger via GitHub Actions UI
- Release publication

**Features:**
- Builds the React package
- Builds Storybook
- Deploys to GitHub Pages
- Adds deployment comments to PRs
- Ensures only one deployment runs at a time

### `storybook-pr-check.yml`

This workflow checks that Storybook builds successfully on pull requests.

**Triggers:**
- Pull requests that modify:
  - React package files
  - Storybook files
  - Package dependencies

**Features:**
- Lints the React package
- Builds the React package
- Builds Storybook
- Archives the build as an artifact
- Comments on the PR with build status

## CI Workflow

### `ci.yml`

This workflow runs tests and builds for all packages.

**Triggers:**
- Push to `main` branch
- All pull requests

**Features:**
- Runs linting
- Runs tests
- Builds all packages

## Usage

### Manual Deployment

To manually deploy Storybook:

1. Go to the Actions tab in the GitHub repository
2. Select the "Deploy Storybook" workflow
3. Click "Run workflow"
4. Select the branch to deploy from
5. Click "Run workflow"

### Viewing Storybook

The deployed Storybook can be viewed at the GitHub Pages URL for this repository.
