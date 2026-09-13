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

---

## 🧠 React Concepts — Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-looking markup right inside
JavaScript. Under the hood, it compiles down to regular `React.createElement()`
calls. It's used because it makes components much easier to read and write —
us to see the structure of our UI and the logic that drives it in one
place, instead of juggling separate template and script files.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — the component
receiving them can read them but never change them. State is data a component
manages *itself*, that can change over time (usually because of user
interaction) and causes the component to re-render when it does. In short:
props come from outside and are read-only; state lives inside and is
mutable.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` gives a component a piece of memory that persists between renders,
plus a function to update it — and updating it triggers a re-render. In this
project, `App.jsx` uses `useState` to track `selectedIds`, the set of
technology IDs currently in the user's stack:

```js
const [selectedIds, setSelectedIds] = useState(() => new Set());
```

`Navbar.jsx` also uses it for the mobile menu's open/closed state.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets a component run code in response to render or when specific
values change — things like fetching data, setting timers, or subscribing to
something — separate from the render itself. In `useTechnologies.js`, `useEffect`
runs once when the component mounts to simulate loading the technology list
asynchronously (a short `setTimeout` standing in for a real API call), setting
`isLoading` to `true` first and `false` once the data is ready. That's what
lets the UI show a loading spinner before the technology cards appear.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell which item is which between renders, so it can
figure out what actually changed — added, removed, or reordered — instead of
re-rendering the whole list from scratch. Without a stable, unique key, React
can mix up items, causing wrong data to show up in the wrong card or broken
UI state. That's why this project uses each technology's `id` as the key,
never the array index.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition,
instead of always rendering the same thing. `StackPanel.jsx` does exactly
this for the empty-stack message:

```jsx
{count === 0 ? (
  <p className="py-4 text-sm leading-relaxed text-muted">
    No technologies selected yet. Add one from the list to get started.
  </p>
) : (
  <div className="flex flex-col">
    {stack.map((tech) => (
      <StackItem key={tech.id} tech={tech} onRemove={onRemove} />
    ))}
  </div>
)}
```

If nothing's selected, it shows a friendly empty-state message; otherwise it
renders the actual list of stack items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent → child: through **props**. The parent just writes attributes on the
child element (`<TechnologyCard tech={tech} isAdded={...} />`), and the child
reads them as its `props` argument. Child → parent: the parent passes a
**function** down as a prop, and the child calls that function (usually from
an event handler like `onClick`) instead of trying to change the parent's
state directly. For example, `App.jsx` passes `onAdd={handleAdd}` down to
`TechnologyGrid` → `TechnologyCard`, and when a card's button is clicked, it
calls `onAdd(tech)` — which runs `handleAdd` back in `App`, updating state
there. Data flows down, events flow up.
