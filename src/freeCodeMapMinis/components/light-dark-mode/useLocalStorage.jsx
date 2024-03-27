import { useState, useEffect } from "react";

// lightTheme, true or false
export default function UseLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(localStorage.getItem(key)) || defaultValue;
        } catch (e) {
            console.log(e)
            currentValue = defaultValue;
        }
        return currentValue
    })

    // storage value in local theme
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}