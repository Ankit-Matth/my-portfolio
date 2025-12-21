import React, { useState } from "react";
import "./Experience.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import meImg from "../../images/experience/me.jpg";
import deskImg from "../../images/experience/desk.jpg";
import officeImg from "../../images/experience/office.jpg";

interface ExperienceProps {
  isFluid: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isFluid }) => {
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  const openFullscreen = (imgSrc: string) => {
    setFullscreenImg(imgSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImg(null);
  };

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
            SquareOps Technologies | <i>Product Engineering Team </i>
          </h2>
          <p className="date">October 2025 – Present</p>
          <p className="description">
            Selected as a React Intern in the Product Engineering Team at SquareOps Technologies (Unitech Cyber Park, Gurugram). This is a stipend-based, work-from-office internship with a Pre-Placement Offer (PPO) opportunity.
            <br></br>
            <b>Tech Stack:</b> React.js, Cypress, Python, Django, MongoDB etc.
          </p>

          <Row className="experience-images g-3">
            <Col xs={12} md={4} className="d-flex align-items-center">
              <img
                src={meImg}
                alt="Me"
                className="experience-img experience-img-main"
                onClick={() => openFullscreen(meImg)}
                style={{ cursor: 'pointer' }}
              />
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column gap-3">
              <div className="experience-img-wrapper">
                <img
                  src={officeImg}
                  alt="Office Cabin"
                  className="experience-img"
                  onClick={() => openFullscreen(officeImg)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="experience-img-wrapper">
                <img
                  src={deskImg}
                  alt="Work Desk"
                  className="experience-img"
                  onClick={() => openFullscreen(deskImg)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="close-button" onClick={closeFullscreen} aria-label="Close">
            ×
          </button>
          <img
            src={fullscreenImg}
            alt="Fullscreen view"
            className="fullscreen-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Container>
  );
};

export default Experience;
