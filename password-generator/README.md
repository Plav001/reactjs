# React Vite + Tailwind CSS Password Generator

This is a simple React app built with Vite and Tailwind CSS. It includes:

- A **password generator** with customizable options for length, numbers, and special characters.
- A **copy-to-clipboard** feature with a visual indicator when copying.

## Features

### 1. Password Generator
- Generates a random password with uppercase and lowercase letters by default.
- Users can include numbers and special characters for stronger passwords.
- Password length can be adjusted using a slider (default: 8 characters).

### 2. Copy to Clipboard
- Users can copy the generated password with a single click.
- The button text changes to **"Copied!"** for 3 seconds after clicking.

### 3. User-friendly UI
- Built with Tailwind CSS for a clean and modern design.
- Responsive layout that works on different screen sizes.

## Installation & Usage

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/password-generator.git
cd password-generator
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

### `App.js`
- Manages the password generation logic.
- Provides options to customize password length and character set.
- Implements the clipboard copy functionality with a visual indicator.

## Technologies Used
- **React.js** (with Vite for fast development)
- **Tailwind CSS** (for styling)

## License
This project is open-source under the MIT License. Feel free to modify and use it! 🚀