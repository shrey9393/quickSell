import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Status from "./pages/Status";
import User from "./pages/User";
import WelcomePage from "./pages/WelcomePage";
import Navbar from "./components/Navbar";
import Priority from "./pages/Priority";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/User" element={<User />} />
          <Route path="/Status" element={<Status />} />
          <Route path="/Priority" element={<Priority />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
