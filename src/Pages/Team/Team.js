import React, { useState } from "react";
import team_mtn from "../../Assets/team_mtn.png";
import team_text from "../../Assets/team_text.png";
import "../../App.scss";
import footer_logo from "../../Assets/footer-logo.png";
import "./Team.scss";

export const Team = () => {
  const [mountainChoice, setMountainChoice] = useState(1);
  return (
    <main id="team">
      <section className="background">
        <div className="img-container full-size">
          <img
            src={team_mtn}
            alt="snow-covered mountains from a distance with hikers visible on the peak"
            id="mountains"
          />
        </div>
      </section>
      <section className="foreground">
        <div className="copy img-container">
          <img
            src={team_text}
            alt="text: 02. Climb: Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue."
          />
        </div>
        <nav className="mountain-bar">
          <button
            className="mountain-select one"
            onClick={() => setMountainChoice(1)}
            style={{
              backgroundColor: `${
                mountainChoice === 1 ? "rgb(176, 180, 190)" : "rgb(65, 79, 107)"
              }`,
              color: `${
                mountainChoice === 2 ? "rgb(176, 180, 190)" : "rgb(65, 79, 107)"
              }`,
            }}
          >
            MOUNTAIN 1
          </button>
          <button
            className="mountain-select two"
            onClick={() => setMountainChoice(2)}
            style={{
              backgroundColor: `${
                mountainChoice === 2 ? "rgb(176, 180, 190)" : "rgb(65, 79, 107)"
              }`,
              color: `${
                mountainChoice === 2 ? "rgb(65, 79, 107)" : "rgb(176, 180, 190)"
              }`,
            }}
          >
            MOUNTAIN 2
          </button>
        </nav>
        <article className="schedule">
          <h2 style={{ color: "rgb(65, 79, 107)" }}>SCHEDULE</h2>
          {mountainChoice === 1 ? (
            <div>
              <p>25 Nov 2016 Vestibulum viverra</p>
              <p>28 Nov 2016 Vestibulum viverra</p>
              <p>18 Dec 2016 Vestibulum viverra</p>
              <p>7 Jan 2017 Vestibulum viverra</p>
            </div>
          ) : (
            <div>
              <p>25 Nov 2022 Vestibulum viverra</p>
              <p>28 Nov 2022 Vestibulum viverra</p>
              <p>18 Dec 2022 Vestibulum viverra</p>
              <p>7 Jan 2023 Vestibulum viverra</p>
            </div>
          )}
        </article>
        <div
          className="footer"
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            background: "rgb(65, 79, 107)",
            padding: ".5% 0",
          }}
        >
          <div
            className="img-container"
            style={{
              width: "10%",
              paddingLeft: "22%",
            }}
          >
            <img src={footer_logo} alt="" />
          </div>
          <span
            className="footer-text"
            style={{
              color: "rgb(99, 118, 157)",
              padding: "0 22%",
              position: "absolute",
              bottom: "30%",
              right: "0",
            }}
          >
            COPYRIGHT 2016. ALL RIGHTS RESERVED.
          </span>
        </div>
      </section>
    </main>
  );
};
