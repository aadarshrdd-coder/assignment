# GeoManager — Country, State & City Management App

A hierarchical CRUD application built with **React JS** (functional components + hooks) and **plain CSS**. No external libraries.

## 🚀 Setup & Run

```bash
cd assignment
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## ✨ Features

| Feature | Description |
|---|---|
| **Country CRUD** | Add, edit, delete countries |
| **State CRUD** | Add, edit, delete states linked to a country |
| **City CRUD** | Add, delete cities linked to a state |
| **Cascade delete** | Deleting a country removes all its states & cities; deleting a state removes all its cities |
| **Confirmation dialogs** | `confirm()` before every edit or delete action |
| **Prompt-based input** | `prompt()` used to enter/update names |
| **Live UI updates** | State updates reflected immediately via React `useState` |

## 🧩 Component Breakdown

```
src/
├── App.jsx              ← Root: all state & handlers
├── App.css              ← Styles
├── main.jsx             ← React DOM entry
└── components/
    ├── CountryList.jsx  ← Renders countries, delegates to StateList
    ├── StateList.jsx    ← Renders states per country, delegates to CityList
    └── CityList.jsx     ← Renders city chips with delete
```

## 🗂️ Data Structure

```js
countries = [
  {
    id: 1,
    name: "India",
    states: [
      {
        id: 1,
        name: "Karnataka",
        cities: ["Bangalore", "Mysore"]
      }
    ]
  }
]
```

## ⚙️ Tech Stack

- **React 19** (functional components, `useState`)
- **Vite** (bundler/dev server)
- **Plain CSS** (no Tailwind, no Bootstrap)
- **No external libraries / npm packages**

## ⚠️ Known Limitations

- City names are stored as strings; if two cities have the same name in one state, deleting one deletes both (use unique city IDs in a production app).
- `prompt()` / `confirm()` are native browser dialogs — they may be blocked in some embedded environments.
- No persistent storage; data resets on page refresh.
