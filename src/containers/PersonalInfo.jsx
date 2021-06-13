import React from "react";
import Description from "./Description";
import Header from '../components/Header.jsx'

const PersonalInfo = () => {
  return (
    <>
      <Description />
      <section className="right-section personal-info">
        <div className="wrapper">
            <Header step={`paso 01/03`} currentView={`personal info.`} />
            <section class="main">
              
            </section>
        </div>
      </section>
    </>
  );
};

export default PersonalInfo;
