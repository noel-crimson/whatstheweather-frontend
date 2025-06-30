"use client";

import React from "react";

export default function DarkModeButton() {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        const body = document.querySelector("body");
        console.log("Dark mode button, changed to " + body.classList.contains("dark-mode"));
        if (body) {
            const isDark = body.classList.contains("dark-mode");
            setDarkMode(isDark);
            if (isDark) {
                body.classList.remove("dark-mode");
            } else {
                body.classList.add("dark-mode");
            }
        }
    };
    return (<button onClick={toggleDarkMode} className="mb-4 px-4 py-2 bg-[var(--panels)] rounded">
        {darkMode ? "Toggle dark mode 🌙" : "Toggle light mode ☀️"}
    </button>);
}