import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Manuel Morales </span>
            
            from <span className="blue"> Malaga, Spain.</span>
            <br/>
            I'm a 20-year-old passionate about web development. 
            
            <br/>
            I'm motivated, eager to learn, and excited to contribute my skills to a growing team.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding motorcycles
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Snorkeling and enjoying underwater adventures
            </li>
            <li className="about-activity">
              <ImPointRight /> Practicing Muay Thai
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "You shouldn’t try to predict the future, but you should build software that can adapt to it"
          </p>
          <footer className="blockquote-footer">Martin Fowler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
