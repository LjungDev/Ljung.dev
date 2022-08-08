<p align="center">
<img src="public/logo.svg" height="200" alt="Logo" />
</p>

# Ljung.dev

Hej!

This is the source code for [ljung.dev](https://ljung.dev).

It uses the following stack:

- [NextJS](https://nextjs.org/) as framework
- [DatoCMS](https://www.datocms.com/) for content
- [Tailwind](https://tailwindcss.com/) for styling
- [Nord](https://www.nordtheme.com/) as theme (with [Baloo 2](https://fonts.google.com/specimen/Baloo+2) / [Open Sans](https://fonts.google.com/specimen/Open+Sans) / [Fira Code](https://fonts.google.com/specimen/Fira+Code) for fonts)
- [Ladle](https://ladle.dev/) for component stories
- [Jest](https://jestjs.io/) / [React Testing Library](https://testing-library.com/) for unit tests
- [Commitizen](https://commitizen-tools.github.io/commitizen/) for commit messages (with [cz-conventional-emoji](https://github.com/gaoac/cz-conventional-emoji) as format)
- [Yarn](https://yarnpkg.com/) as package manager
- [Atomic Design](https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101/) for component structure

## Installation

Run `yarn` to install dependencies. Node 17+ is supported/required.

## Commands

Prefix each command with `yarn`, e.g. `yarn dev`.

> `dev`, `build`, `start`, and `lint` are default NextJS commands.

| Command              | Description                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dev` / `wsldev`     | Starts development server. If on [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) try running `yarn wsldev` if ports does not get exposed correctly.          |
| `build`              | Builds the bundle.                                                                                                                                                       |
| `start` / `wslstart` | Runs any previously built bundle. If on [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) try running `yarn wslstart` if ports does not get exposed correctly. |
| `lint`               | Check for linting errors.                                                                                                                                                |
| `ladle`              | View component stories.                                                                                                                                                  |
| `test`               | Run unit tests.                                                                                                                                                          |

## Environment variables

The following environment variables are needed. For local development add them to your `./.env.local`.

| Variable                 | Value                                                                   |
| ------------------------ | ----------------------------------------------------------------------- |
| DATOCMS_ENDPOINT         | Endpoint URL to DatoCMS for content (live).                             |
| DATOCMS_PREVIEW_ENDPOINT | Endpoint URL to DatoCMS for content (drafts).                           |
| DATOCMS_API_TOKEN        | API token (read-only) for DatoCMS.                                      |
| PREVIEW_TOKEN            | Random string used as query parameter to toggle preview mode.           |
| UNOPTIMIZED_IMAGES       | (optional) Set to disable images optimization (used for `next export`). |
