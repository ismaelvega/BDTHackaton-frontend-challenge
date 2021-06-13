import React from "react";
import '../assets/styles/components/Description.scss'

const Description = () => {
  console.log(process.env.PUBLIC_URL)
  return(
  <section className="description-section" style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})`
  }}>
    
  </section>
  );
};

export default Description;
