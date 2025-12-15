"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function SunMoonToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <div className="sun-moon-toggle-wrapper">
            <button
                className={`toggle-btn ${isDark ? "dark-mode-active" : ""}`}
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
            >
                <div className="sun-rays" />
                <div className="main-circle" />
            </button>

            <style jsx>{`
        .toggle-btn {
          --bg: #e8e8e8;
          --fg: #212121;
          background-color: var(--bg);
          border-radius: 10px;
          /* Resized from 50px to 40px to fit Navbar */
          --dimensions: 40px; 
          width: var(--dimensions);
          height: var(--dimensions);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
          cursor: pointer;
          position: relative;
          overflow: hidden; /* Ensure rays don't overflow */
          transition: background-color 0.4s ease;
        }

        .toggle-btn .main-circle {
          /* Scaled down relative to new dimensions */
          --dimensions: 16px; 
          width: var(--dimensions);
          height: var(--dimensions);
          background-color: var(--fg);
          border-radius: 50%;
          position: absolute;
          z-index: 2;
          transition: transform 0.4s ease 0.2s, background-color 0.4s ease;
        }

        /* The "Moon" shadow circle */
        .toggle-btn .main-circle::after {
          content: "";
          background-color: var(--bg);
          border-radius: 50%;
          --dimensions: 12px;
          width: var(--dimensions);
          height: var(--dimensions);
          position: absolute;
          top: 1px;
          right: -1px;
          transform-origin: right top;
          transform: scale(0);
          transition: transform 0.4s ease 0.2s, background-color 0.4s ease;
        }

        .toggle-btn .sun-rays {
          display: grid;
          place-items: center;
          transition: transform 0.4s ease 0.2s;
          position: absolute;
          z-index: 1;
        }

        .toggle-btn .sun-rays,
        .toggle-btn .sun-rays::after,
        .toggle-btn .sun-rays::before {
          --width: 3px;
          --height: 6px;
          width: var(--width);
          height: var(--height);
          background-color: var(--fg);
          position: absolute;
          box-shadow: 0 13px 0 var(--fg), 0 -13px 0 var(--fg); /* Adjusted for size */
        }

        .toggle-btn .sun-rays::after {
          content: "";
          transform: rotate(120deg);
        }

        .toggle-btn .sun-rays::before {
          content: "";
          transform: rotate(240deg);
        }

        /* Dark Mode State (Active) */
        .toggle-btn.dark-mode-active {
            --bg: #212121;
            --fg: #e8e8e8;
        }

        .toggle-btn.dark-mode-active .main-circle {
          transform: scale(1.2);
        }

        .toggle-btn.dark-mode-active .main-circle::after {
          transform: scale(1);
        }

        .toggle-btn.dark-mode-active .sun-rays {
          transition: transform 0.4s;
          transform: scale(0);
        }

        @media (prefers-color-scheme: dark) {
            /* Initial vars handled by class based on theme hook, but backup here */
            /* We rely on the class .dark-mode-active controlled by JS for direct state */
        }
      `}</style>
        </div>
    );
}
