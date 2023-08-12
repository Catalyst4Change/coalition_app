import React from "react";
import home_mnts from "../../Assets/home_mnts.png";
import LA_mtns_copy from "../../Assets/LOSANGELES MOUNTAINS copy.png";
import "../../App.scss";
import "./Home.scss";

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
        <div className="copy img-container">
          <img src={LA_mtns_copy} alt="text: Las Angeles Mountains" />
        </div>
      </section>
    </main>
  );
};
