import React from 'react';
import "./index.css";
import About from "./routes/about";
import { Route, Routes } from "react-router";  // Corrected import statement

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

