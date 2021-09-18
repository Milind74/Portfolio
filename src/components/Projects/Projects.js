import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/Agoda.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/Tripoto.png";
import chatify from "../../Assets/Projects/ketto.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Codecov.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ketto  "
              description="Ketto is a well-known crowdfunding platform where any individual across the country can raise funds for causes ranging from medical healthcare to disaster relief."
              link="https://github.com/Milind74/ketto-clone"
              // linkmedium="https://nilp7744.medium.com/project-on-ketto-clone-5aceeccfc215"
              linklive="https://ketto.herokuapp.com/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Agoda "
              description="Agoda.com is an online travel agency and metasearch engine for hotels, vacation rentals, flights, and airport transfers. It was founded in 2003 and later acquired by Booking Holdings, becoming a subsidiary of the company. About half of Agoda's bookings are made via its mobile apps."
              link="https://github.com/Milind74/Agoda-Clone"
              // linkmedium="https://nilp7744.medium.com/project-on-clockify-clone-d6fa18977d4a"
              linklive="https://agoda.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tripoto "
              description=" Tripoto is a travel community and travel 
              search engine portal based on user-generated content. 
              The platform was launched in October 2013 by founders
               Anirudh Gupta and Michael Pargal Lyngdoh. Tripoto allows users to write travel 
               stories and discover those written by other travelers."


              link="https://github.com/Milind74/heptane_tripoto"
              // linkmedium=""
              linklive="https://tripoto.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Codecov"
              description="
              Codecov provides highly integrated tools
               to group, merge, archive, and compare coverage reports.
              Uploads coverage reports from your CI. Merges builds and 
              languages into a single coherent report. 
              Displays coverage data in GitHub Files tab."
              
              link="https://github.com/Milind74/Codecov"
              // linkmedium="https://nilp7744.medium.com/masai-collaboration-project-animoto-clone-fec2a84b2f8b"
              linklive="https://codecov.vercel.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
