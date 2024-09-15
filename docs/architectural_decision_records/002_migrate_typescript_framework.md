# Migrate TypeScript Framework

## TLDR (Too Long Didn't Read)

This document outlines the requirements for migrating the frontend framework from Next.js to Astro.

## Table of Contents

- [Migrate TypeScript Framework](#migrate-typescript-framework)
  - [TLDR (Too Long Didn't Read)](#tldr-too-long-didnt-read)
  - [Table of Contents](#table-of-contents)
  - [Current Environment](#current-environment)
  - [Decision](#decision)
    - [Pros](#pros)
    - [Cons](#cons)
  - [Consequences](#consequences)

## Current Environment

- Python
- TypeScript
  - Astro
  - Shadcn UI
  - Tailwind CSS

## Decision

The decision was made to migrate the frontend framework from Astro to Next.js. This is due to Shadcn UI charts not working with Astro when I tried to use them.

### Pros

- Shadcn UI charts work with Next.js

### Cons

- Lose the current dashboard and must be re-built with Next.js

## Consequences

The current dashboard will be lost and must be re-built with Next.js.
