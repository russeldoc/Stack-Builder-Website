# Stack-Builder-Website 🧩

Build your ideal development stack — browse frontend, backend, database, and
tooling options side by side, and put together the combination that fits your
next project.

## 📖 About

Stack-Builder-Website is a single-page React app for exploring popular web development
technologies. Each technology is shown as a card with its category, difficulty
level, and rating. Click **Add to Stack** on anything you like, and it shows up
in a live "Your Stack" sidebar — remove items one at a time or clear
everything at once, with toast notifications confirming every action.

## 🛠️ Built With

- **React 19** — component-based UI
- **Vite** — dev server & build tool
- **Tailwind CSS v4** — utility-first styling, with a centralized brand-gradient theme
- **react-toastify** — toast notifications
- **JavaScript (ES6+)** / JSX

## ✨ Features

- **🔍 Browse & compare technologies** — a responsive grid (3 → 2 → 1 columns)
  of technology cards pulled from a local JSON dataset, each with a category
  badge, difficulty tag, and star rating.
- **🧱 Build a custom stack** — add as many technologies as you want; a card's
  button disables once it's added, and the "Your Stack" panel updates
  instantly with a live count, individual remove buttons, and a "Remove All"
  action.
- **🔔 Real-time feedback** — every add, duplicate attempt, removal, and
  clear-all triggers a toast notification, so you always know exactly what
  just happened.

## 🚀 Getting Started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

