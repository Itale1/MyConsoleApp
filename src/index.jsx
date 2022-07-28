import * as React from 'react';
import { createRoot } from "react-dom/client";
import { Header } from "./Header";

const container = document.getElementById('react_root');
const react_root = createRoot(container);

window.addEventListener('load', () =>{
    react_root.render(<React.StrictMode>
        <Header />
    </React.StrictMode>);
});

