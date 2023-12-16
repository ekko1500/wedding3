// import Gallery from "../components/Gallery";
import { ThemeProvider } from "@material-tailwind/react";
import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import "./styles.css";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <ThemeProvider>
        <NavBar />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
