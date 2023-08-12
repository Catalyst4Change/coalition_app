import React from "react";
import logo from "../../Assets/Logo.png";
import history_mtn from "../../Assets/history_mtn.png";
import history_text from "../../Assets/history_text.png";
import "../../App.scss";
import { Link } from "react-router-dom";

export const History = () => {
  return (
    <main id="history">
      <section className="background">
        <div className="img-container full-size">
          <img
            src={history_mtn}
            alt="snow-covered mountains viewed from far away"
            id="mountains"
          />
        </div>
      </section>
      <section className="foreground">
        <div className="copy img-container">
          <img
            src={history_text}
            alt="text: 01. History: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue."
            style={{
              position: "absolute",
              top: "15%",
              left: "21%",
              width: "57%",
            }}
          />
        </div>
        <div
          className="carousel"
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "100px",
            background: "rgba(10, 10, 60, 0.5)",
            backdropFilter: "blur(5px)",
          }}
        ></div>
      </section>
    </main>
  );
};
