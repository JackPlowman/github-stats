# GitHub Stats Dashboard

An interactive dashboard to visualize statistics and insights for your GitHub repositories.

## Table of Contents

- [GitHub Stats Dashboard](#github-stats-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Tech Stack](#tech-stack)
  - [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [Licence](#licence)

## Overview

**GitHub Stats Dashboard** is a web application that provides a modern, responsive dashboard for visualizing statistics across your GitHub repositories. It helps you analyze your activity, contributions, and codebase trends with beautiful charts and summaries.

## Features

- 📊 Visualize commit history, contributors, and language usage per repository
- 🗂️ Browse all repositories in a sidebar with quick navigation
- 🥧 Pie and bar charts for commits and file types
- 🌗 Light/dark mode toggle
- ⚡ Fast, modern UI built with Next.js and React
- 🧪 Automated tests and code quality checks

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (use the version pinned in dashboard/package.json)
- [npm](https://docs.npmjs.com/)
- [uv](https://github.com/astral-sh/uv)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/JackPlowman/github-stats.git
   cd github-stats/dashboard
   ```

2. Install dependencies:

   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```sh
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Use the sidebar to navigate between summary, user, and repositories views.
- Click on a repository to see detailed stats: total commits, files, contributors, and language breakdowns.
- Toggle between light and dark mode using the button in the sidebar footer.

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Charts:** [Recharts](https://recharts.org/)
- **Styling:** CSS Modules, custom themes
- **Testing:** Playwright (Python), Jest
- **Linting/Formatting:** ESLint, Prettier, Ruff (Python)

## Contributing

Contributions are welcome! Please read the [Contributing Guidelines](./docs/CONTRIBUTING.md) for details on submitting pull requests or reporting issues.

We adhere to the [Conventional Commits](docs/CONVENTIONAL_COMMITS.md) specification for commit messages.

## Code of Conduct

This project is released with a [Contributor Code of Conduct](./docs/CODE_OF_CONDUCT.md). By participating, you agree to abide by its terms.

## Licence

This project is licensed under the MIT Licence. See the [LICENCE](./LICENCE) file for details.
