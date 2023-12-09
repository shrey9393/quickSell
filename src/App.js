import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Status from "./pages/Status";
import WelcomePage from "./pages/WelcomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Status" element={<Status />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
