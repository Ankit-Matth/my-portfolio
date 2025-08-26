import React from "react";
import "./Experience.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import idCard from "../../images/experience/gssoc_id_card.png";
import emailImg from "../../images/experience/gssoc_email.png";
import badge from "../../images/experience/gssoc_contributor_badge.png";

interface ExperienceProps {
  isFluid: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isFluid }) => {
  return (
    <Container
      id="experience"
      fluid={isFluid}
      className={isFluid ? "px-5 mt-2" : "mt-2"}
    >
      <h1>Relevant Experience</h1>

      <Card className="experience-card">
        <Card.Body>
            <h2 className="experience-title">
                GirlScript Summer of Code 2025 | Open Source Contributor
            </h2>
            <p className="date">Aug 2025 – Present</p>
            <p className="description">
                Selected as a contributor in a nationwide 3-month open-source program,
                similar to Google Summer of Code. Actively applying my skills to add
                features, fix bugs, and improve documentation in open-source projects
                under GSSoC.
            </p>

            <Row className="experience-images">
            <Col xs={12} md={4} className="d-flex justify-content-center">
                <img src={idCard} alt="GSSoC ID Card" className="experience-img" />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
                <img src={emailImg} alt="GSSoC Email Confirmation" className="experience-img" />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
                <img src={badge} alt="GSSoC Contributor Badge" className="experience-img" />
            </Col>
            </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Experience;
