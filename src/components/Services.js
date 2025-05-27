import React from "react";
import ServiceItem from "./ServiceItem";
import { FaExchangeAlt, FaCloud, FaLock } from "react-icons/fa";
import "./Services.css";

function Services() {
  return (
    <section id="Services">
      <h3>Serviços</h3>
      <div id="Service-container">
        <ServiceItem title="Integração de sistemas" emote={<FaExchangeAlt />} />
        <ServiceItem title="Back-end escalável e cloud" emote={<FaCloud />} />
        <ServiceItem title="Segurança e autenticação" emote={<FaLock />} />
      </div>
    </section>
  );
}

export default Services;
