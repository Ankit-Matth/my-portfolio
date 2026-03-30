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
      <h1>Experience</h1>

      <Card className="experience-card">
        <Card.Body>
          <h2 className="experience-title experience-title-row">
            <span>
              SquareOps Technologies | <i>Product Engineering Team </i>
            </span>
            <span className="internship-duration">(6-Month Internship)</span>
          </h2>
          <p className="date">October 2025 – April 2026</p>
          <ul className="description">
            <li>
              Contributed to the development of Atmosly (AI-Native Kubernetes Platform) as a React Intern, working from the Gurugram office (Unitech Cyber Park). Mainly added new features, fixed UI issues, and optimized responsiveness.
            </li>
            <li>
              Built the entire end-to-end testing setup from scratch using Cypress. Introduced automated testing in the product lifecycle along with a custom reporting architecture for efficient debugging.
            </li>
            <li>
              <b>Tech Stack:</b> React.js, Python, Django, MySQL, MongoDB, Next.js, Tailwind CSS etc.
            </li>
          </ul>

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
