import React from "react";
import backArrow from "../assets/static/icons/back-arrow.svg";
import '../assets/styles/components/Header.scss'

const Header = ({step, currentView}) => {
  return (
    <header className="header">
      <section className="back">
        <img src={backArrow} width="10px" height="17px" alt="back arrow" />
        <p>Volver</p>
      </section>
      <section className="current-view">
        <p className="step">{step}</p>
        <p className="view">{currentView}</p>
      </section>
    </header>
  );
};

export default Header;
