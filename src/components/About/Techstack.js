import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiRedux } from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  
  DiGit,
  
} from "react-icons/di";

import { SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
