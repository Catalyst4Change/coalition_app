import React from "react";
import home_mnts from "../../Assets/home_mnts.png";
import logo from "../../Assets/Logo.png";
import LA_mtns_copy from "../../Assets/LOSANGELES MOUNTAINS copy.png";
import "../../App.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main id="home">
      <section className="background">
        <div className="img-container full-size">
          <img
            src={home_mnts}
            alt="snow-covered mountains from a distance with hikers visible on the peak"
            id="mountains"
          />
        </div>
      </section>
      <section className="foreground">
        <div className="logo img-container">
          <img
            src={logo}
            alt="LA Mountains Logo"
            style={{
              position: "absolute",
              top: "1%",
              left: "22%",
              width: "30px",
            }}
          />
        </div>
        <div className="copy img-container">
          <img
            src={LA_mtns_copy}
            alt="text: Las Angeles Mountains"
            style={{
              position: "absolute",
              top: "27%",
              left: "26%",
              width: "37%",
            }}
          />
        </div>
      </section>
    </main>
  );
};
