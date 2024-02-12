import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css';

interface ProjectProps {
  cardTitle: string;
  projectImg: string;
  liveLink: string;
  sourceCode: string;
}

const Project: React.FC<ProjectProps> = ({ cardTitle, projectImg, liveLink, sourceCode }) => {

  return (
        <Col sm={6} xs={12} className="d-flex flex-column align-items-center justify-content-start">
            <div id='projectsPointer'></div>
            <Card className='border-4 projectsCard' style={{borderColor: 'black', backgroundColor: 'rgba(0, 255, 0, 0.2)'}}>
                <Card.Body>
                    <Card.Title style={{ fontSize: '1.7rem',color: 'black',fontFamily: 'Zilla Slab, serif'}}>{cardTitle}</Card.Title>
                    <Card.Img src={projectImg} className='m-1 mb-3 mt-2' style={{ width: '90%', border: '3px solid black' }} />
 
                     <a href={liveLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className='mx-2 mb-2 projectsBtn'>Live Link</Button>
                    </a>
                    <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className='mx-2 mb-2 projectsBtn'>Source Code</Button>
                    </a>
              </Card.Body>
            </Card>
        </Col>
  );
};

export default Project;
