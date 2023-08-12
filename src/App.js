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
          <img src={logo} alt="LA Mountains Logo" />
        </div>
        <div className="links flex-box row distribute">
          <a rel="noopener" target="_blank" href="#facebook_ads_example">
            01. HISTORY
          </a>
          <a rel="noopener" target="_blank" href="#facebook_ads_example">
            02. TEAM
          </a>
        </div>
      </nav>
      <Home />
      <History />
      {/*<Team /> */}
    </main>
  );
}

export default App;
