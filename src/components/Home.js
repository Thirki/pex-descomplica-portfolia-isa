import React from "react";
import HeroImage from "./HeroImage";
import "./Home.css";

export default function Home() {
  return (
    <section id="Home">
      <div className="information">
        <h1>
          Olá, eu sou a<br />
          Isaddora Freitas <span>: )</span>
        </h1>
        <p>Desenvolvedora Back-End Pleno</p>
        <div className="button-container">
          <a
            className="a-cv"
            href="https://www.linkedin.com/in/isaddorafreitas/"
            target="_blank"
            rel="noreferrer"
          >
            Entrar em contato
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <HeroImage />
      </div>
    </section>
  );
}
