import React from 'react';
import Body from "./Body.jpeg"
import './user.css'; // Import your CSS file with unique class nam
function Aboutus (){
    return (
      <div className="container">
        <img
          className="header-image"
          src={Body}
          alt="Mental Health Header"
        />
        <div>
          <h2 className="title">About Us</h2>
          <p className="description">
            Welcome to Mental Health Hub, your one-stop destination for
            information and support related to mental health.
          </p>
          <p className="info">
            A mental illness is a physical illness of the brain that causes
            disturbances in thinking, behavior, energy, or emotion that make it
            difficult to cope with the ordinary demands of life. Research is
            starting to uncover the complicated causes of these diseases, which
            can include genetics, brain chemistry, brain structure, experiencing
            trauma and/or having another medical condition, like heart disease.
          </p>
          <h3 className="subtitle">Know Us Better</h3>
          <p className="about-description">
            We at Digit-Ally hope to firstly create awareness about mental health
            issues faced by people around the world. And in our own small way,
            we wish to help people overcome some small problems in their mental
            health.
          </p>
        </div>
      </div>
    );}
  


export default Aboutus;
