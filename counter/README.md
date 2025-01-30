# React Vite + Tailwind CSS App

This is a simple React app built with Vite and Tailwind CSS. It includes:
- A **counter** with increment and decrement functionality (capped at 0 and 25).
- A **theme switcher** that toggles between dark and light modes, persisting the setting across page refreshes.

## Features

### 1. Counter Component
- Displays a counter starting from `0`.
- Increment and decrement buttons, ensuring the value stays within `0` to `25`.
- Styled with Tailwind CSS for a modern look.

### 2. Theme Switcher
- Allows toggling between **light mode** and **dark mode**.
- Uses `localStorage` to save the theme preference, so it remains after a page refresh.
- Smoothly switches icons between a **moon** (for dark mode) and a **sun** (for light mode).

## Installation & Usage

### 1. Clone the Repository
```sh
git clone https://github.com/Plav001/reactjs.git
cd your-repo
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the App
```sh
npm run dev
```

Then, open [http://localhost:5173](http://localhost:5173) in your browser.

## Components Overview

### Counter Component (`Counter.js`)
This component manages a simple counter state:
```jsx
const [counter, setCounter] = useState(0);
```
- **Increment Function:** Adds `1` up to a maximum of `25`.
- **Decrement Function:** Subtracts `1`, stopping at `0`.

### Theme Switcher (`ThemeSwitcher.js`)
Handles dark/light mode with persistence:
```jsx
const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
```
- Saves the theme preference in `localStorage`.
- Updates the class on `document.documentElement`.
- Toggles the **moon** and **sun** icons accordingly.

## Technologies Used
- **React.js** (with Vite for fast development)
- **Tailwind CSS** (for styling)
- **LocalStorage** (to persist theme setting)

## License
This project is open-source under the [MIT License](LICENSE). Feel free to modify and use it! 🚀

