# Product Thinking Memory Map

A small React + Vite project that turns the framework in `ProductThinking.txt` into an interactive visual memory map.

The app is built around the sequence:

`Human → System → Pillars → Decision`

It is designed to make the framework easier to use in product thinking, stakeholder conversations, interviews, and strategy sessions.

## What It Shows

- The four core layers of the framework
- The key questions to ask at each layer
- The expected outputs from each stage
- The product decision pillars: usability, feasibility, and viability
- The common failure mode of skipping the human layer
- The recommended operating flow: discovery, diagnosis, design, decision
- A finance/audit example translated into the same structure

## Source Material

The content is based on:

- [ProductThinking.txt](./ProductThinking.txt)

The interactive UI is implemented in:

- [src/App.tsx](./src/App.tsx)
- [src/index.css](./src/index.css)

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS utilities with custom CSS styling

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
.
├── ProductThinking.txt
├── src
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Design Intent

This project is not a generic diagram. It is meant to reinforce a specific working habit:

1. Start with human reality.
2. Diagnose the system producing the behavior.
3. Evaluate the solution through product pillars.
4. State the decision in business terms.

The UI emphasizes that progression so the framework is easier to remember and easier to present.

## Notes

- The current app is a single-page memory map.
- The text in `ProductThinking.txt` remains the source framework.
- If you want to extend this project, a sensible next step would be adding editable content, export support, or a presentation mode.
