"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Define the props validation is optional but good practice
interface ThemeProviderProps {
    children: React.ReactNode
    attribute?: "class" | "data-theme" | "data-mode"
    defaultTheme?: string
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
}

export function ThemeProvider({
    children,
    ...props
}: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
