import React from "react";
import Description from "./Description";
import '../assets/styles/components/Welcome.scss'
import pentagonUserIcon from '../assets/static/icons/pentagon-user-icon.svg'
import pentagonBriefcaseIcon from '../assets/static/icons/pentagon-briefcase-icon.svg'
import filledPentagonBriefcaseIcon from '../assets/static/icons/filled-pentagon-briefcase-icon.svg'
import unfilledPentagonUserIcon from '../assets/static/icons/unfilled-pentagon-user-icon.svg'
import arrowIcon from '../assets/static/icons/arrow-icon.svg'

const Welcome = () => {
  return(
    <>
      <Description />
      <section className="right-section">
        <div className="main-text">
          <h1>¡Únete a la comunidad!</h1>
          <p>Para empezar, dinos qué cuenta te gustaría abrir</p>
        </div>
        <div className="account-cards">
        <article className="account--card" 
            onMouseOver={(event) => {
              document.querySelector('.developer').src = pentagonUserIcon
            }}
            onMouseLeave={(event) => {
              document.querySelector('.developer').src = unfilledPentagonUserIcon
            }}
          >
            <img 
              src={unfilledPentagonUserIcon}
              className="developer" 
              width="52px" 
              height="52px"
              alt="pentagon solid" 
            />
            <div className="account-info">
              <h2>Developers</h2>
              <p>Cuenta personas para entrar en el mundo dev</p>
            </div>
            <img 
              className="arrow-icon"
              src={arrowIcon}
              width="13px"
              height="13px"
              alt="arrow icon"
            />
          </article>

          <article className="account--card" 
            onMouseOver={(event) => {
              document.querySelector('.business').src = filledPentagonBriefcaseIcon
            }}
            onMouseLeave={(event) => document.querySelector('.business').src = pentagonBriefcaseIcon}
          >
            <img 
              src={pentagonBriefcaseIcon}
              className="business"  
              width="52px" 
              height="52px"
              alt="pentagon" 
            />
            <div className="account-info">
              <h2>Business</h2>
              <p>Tienes o perteneces a una compañía</p>
            </div>
            <img 
              className="arrow-icon"
              src={arrowIcon}
              width="13px"
              height="13px"
              alt="arrow icon"
            />
          </article>
        </div>
        <p className="login-invite">¿Ya tienes cuenta?<span> Inicia sesión</span></p>
      </section>
    </>
  )
};

export default Welcome;
