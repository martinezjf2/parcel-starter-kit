// import { createRoot } from "react-dom/client";
import '../scss/main.scss';
// import App from './App.js';

// const appDiv = document.getElementById("app");
// const root = createRoot(appDiv);
// root.render(<App />);

import React from "react";
import ReactDOM from "react-dom";
// If you wanted to implement routes, make sure to wrap App component within BrowserRouter example below lines 19
import { BrowserRouter } from 'react-router-dom';
import App from "./App.js";

const appDiv = document.getElementById("app");
ReactDOM.render(<App />, appDiv);


// ReactDOM.render(
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>, appDiv);


// export default function App() {
//     return (
      
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/resume" element={<Resume />} />
//         </Routes>
      
//     );
// }
