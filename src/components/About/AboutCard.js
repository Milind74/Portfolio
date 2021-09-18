import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Milind Anand </span>
            from <span className="purple">Bihar, India.</span>
            <br /> I have completed my graduation in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> photography
            </li>
            <li className="about-activity">
              <ImPointRight />  Traveling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <br/>
          <footer className="blockquote-footer">Milind</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
