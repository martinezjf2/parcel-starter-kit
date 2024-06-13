import React from "react";
import { createRoot } from 'react-dom/client';

const App = () => {
    return <h1>This is my react app</h1>
}

const appDiv = document.getElementById("app")
const root = createRoot(appDiv)
root.render(<App />)
