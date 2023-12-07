// import Gallery from "../components/Gallery";
import { ThemeProvider } from "@material-tailwind/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import Home from "./components/Home";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
