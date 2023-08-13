import "./App.scss";
import { Home } from "./Pages/Home/Home";
import { History } from "./Pages/History/History";
import { Team } from "./Pages/Team/Team";
import logo from "./Assets/Logo.png";

function App() {
  return (
    <main id="app">
      <nav className="flex-box row distribute">
        <div className="logo img-container">
          <a rel="noopener" href="#home-page">
            <img src={logo} alt="LA Mountains Logo" />
          </a>
        </div>
        <div className="links flex-box row distribute">
          <a rel="noopener" href="#history-page">
            01. HISTORY
          </a>
          <a rel="noopener" href="#team-page">
            02. TEAM
          </a>
        </div>
      </nav>
      <div id="home-page" className="page">
        <Home />
      </div>
      <div id="history-page" className="page">
        <History />
      </div>
      <div id="team-page" className="page">
        <Team />
      </div>
    </main>
  );
}

export default App;
