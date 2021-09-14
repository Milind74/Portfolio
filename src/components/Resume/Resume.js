import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/milindresume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
        >
          <Button style={{width:"300px"}} variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume" data-aos="fade-up">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Training</h3>
            <Resumecontent
              title="JAVA TRAINING"
              date="June 2020"
              content={[
                "Attended a training session in Haldia Institute of technology on java.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="QUIZ COMPETITION  [ HIT-2018 ]"
              content={[
                "Participation in Quiz competition and Canvas Painting competitions of semi-online College fest 'Extravaganza' organized by my college. ",
             
             
             
              ]}

            />

<Resumecontent
              title="Construct week Project"
              content={[
                "Won 1st prize in a construct week project at Masai school" 
              ]}
            />

            <Resumecontent
              title="Inter-Collegiate Cricket Tournament"
              content={[
                "Won 3 times  at Inter-Collegiate Cricket Tournament  ",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title=" B.E COMPUTER SCIENCE ENGINEERING [ haldia, west bengal ] "
              date="2016 - 2020"
              content={["CGPA: 7.11  "]}
            />
            <Resumecontent
              title="12TH BOARD [ Milia Convent School ]"
              date="2013 - 2015"
              content={["Precentage: 52.54%"]}
            />
            <Resumecontent
              title="10TH BOARD [ Mount Zion School ] "
              date="2001 - 2012"
              content={["Precentage: 90.00%"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3> */}
            {/* <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-right"
        >
          <Button style={{width:"300px"}} variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
