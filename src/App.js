import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./Pages/Home/Home";
import { History } from "./Pages/History/History";
import { Team } from "./Pages/Team/Team";

function App() {
  return (
    <main id="app">
      <nav
        className="flex-box row distribute"
        style={{
          position: "absolute",
          top: "2%",
          left: "68%",
          color: "white",
          width: "200px",
        }}
      >
        <Link to="/history">
          <span>01. HISTORY</span>
        </Link>
        <Link to="/team">
          <span>02. TEAM</span>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/team" element={<Team />}></Route>
      </Routes>
    </main>
  );
}

export default App;
