import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import milind  from "../../Assets/milind.jpg"
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";
import { FaLinkedinIn } from "react-icons/fa";
import TransitionsModal from "../Modal/ContactModal.jsx";
function Home2() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" data-aos="fade-right">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" data-aos="fade-up">
             
          I am a computer science engineer by degree  <br/><br/> and
            a full-stack web developer by passion.
           Enthusiast to learn and  <br/><br/> apply new things,
          able to collaborate with a team. Keen to help people. 
              <br />
              <br />I am an expert in
              <i>
                <b className="purple">  JavaScript, React, and Redux. </b>
              </i>
              <br /> <br/>
            
              I am learning the MERN stack currently.
            
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar"
            data-aos="fade-down"
            style={{ marginTop: "-32px" }}
          >
            <Tilt>
              <img
                src={milind}
                                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" data-aos="fade-up">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Milind74"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MilindAnand16?s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/milind-anand-33a361175/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <h3>
              Contact No:
              
              <a
                href="tel:+6206039202"
                style={{
                  color: "purple",
                  display:"block",
                  textDecoration:"none"
                }}
              >
                +916206039202
              </a>
            </h3>
            <br /> 

            <h3>
              Email:
              <br />
    
              <a
                href="mailto:milindanand74@gmail.com"
                style={{
                  color: "purple",
                  display:"block",
                  textDecoration:"none"
                }}
              >
                milindanand74@gmail.com
              </a>
              </h3>
              <br />
            <TransitionsModal />
          </Col>
        </Row>
      </Container>
      
    </Container>

    
  );
}
export default Home2;
