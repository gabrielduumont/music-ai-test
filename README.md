# Front-end platform test

This project is a Next.js application designed to be built and run with a set of tools and scripts to ensure code quality and consistency. Below, you'll find instructions on how to build, run, and maintain this application.

### Live demo

You can check a live demo here: https://music-ai-test.vercel.app/

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v18.x or later)
- npm

### Installation

First, install the necessary dependencies by running:

```bash
npm install
```

### Running the Application

To start the application in development mode, use the following command:

```bash
npm run dev
```

This will start the Next.js development server, typically accessible at http://localhost:3000.

### Building the Application

To build the application for production, run:

```bash
npm run build
```

This command performs the following steps:

1. TypeScript Compilation (tsc): The TypeScript compiler checks for type errors in the codebase.
2. Next.js Build (next build): The application is built for production.

After building, you can start the application with:

```bash
npm run start
```

### Linting the Code

To check for linting errors using ESLint, run:

```bash
npm run lint
```

### Formatting the Code

This project uses Prettier to ensure consistent code formatting. To automatically format the codebase, use:

```bash
npm run format
```

You can also check if the code is properly formatted without making any changes by running:

```bash
npm run format:check
```

### Type Checking

To check for TypeScript type errors, you can run:

```bash
npm run tsc:check
```

Alternatively, you can perform type checking with skipLibCheck enabled, which can improve performance by skipping type checks on library files:

```bash
npm run type-check
```

### Quality Check

To ensure that your code meets all quality standards before committing or pushing, you can run a comprehensive quality check:

```bash
npm run quality:check
```

This command runs the following checks sequentially:

1. Linting (npm run lint): Ensures code adheres to linting rules.
2. TypeScript Compilation (npm run tsc): Checks for type errors.
3. Format Check (npm run format:check): Ensures code is properly formatted

### Husky Integration

This project uses Husky to manage Git hooks, helping enforce code quality checks before commits and pushes. Husky is automatically set up when you install the project dependencies. To manually set up Husky, you can run:

```bash
npm run prepare
```
