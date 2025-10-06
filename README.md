# Expandable Table

> A responsive, accessible data table with expandable rows built using React and Vite.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Running the Project](#running-the-project)
4. [Thoughts & Improvements](#thoughts-and-improvements)

---

## Features

1. Rows and columns change color on hover.
2. Rows expand both on mouse click and when pressing the "Enter" key if the row is focused.
3. You can navigate between rows using the "Tab" key.
4. A focused row is highlighted with a blue outline.
5. The icon in the first column animates when the row is expanded or collapsed.

---

## Installation

1. **Clone the repository**:

```bash
git clone <repository-url>
cd <project-folder>
```

2. **Check Node.js version**:

Vite requires **Node.js v20.19+ or v22.12+**. You can check your version:

```bash
node -v
```

- If your Node.js version is lower, upgrade using your preferred method:

**Using nvm:**

```bash
nvm install 22
nvm use 22
```

---

3. **Install dependencies**:

```bash
yarn install
```

---

## Running the Project

**Start the development server:**

```bash
yarn dev
```

- The app will run at `http://localhost:5173` (or the port shown in the terminal).

---

## Thoughts and Improvements

Firstly, kudos to the developer(s) for choosing to implement a table component. It’s a tricky component to get right, and it’s easy for things to break, especially with responsive layouts, expandable rows, and accessibility concerns.

Some potential improvements to consider:

- Primitive Components: Not strictly needed for this table, but useful for consistent, reusable components elsewhere.
- Styling Flexibility: Hardcoded colors and spacing limit adaptability. Integrating a design system or CSS variables would improve maintainability.
- Testing: Components currently lack automated tests. Adding tests would ensure reliability and confidence for future changes.
- EDITED After submission: After sleeping on this solution for a week. When I got back to it, I noticed that I did overcomplicate the focus feature. I could have simply made the Table body group clickable and should just work.
