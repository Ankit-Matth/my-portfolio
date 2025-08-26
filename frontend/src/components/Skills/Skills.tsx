import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Skills.css';
import SkillsCloud from './SkillsCloud';

interface SkillsProps {
  isFluid: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isFluid }) => {
  return (
    <Container id='skills' fluid={isFluid}>
      <Row>
        <Col md={6} sm={12} className='d-flex flex-column justify-content-center'>
          <h1>My Skills</h1>
          <p>
            With a balance of strong engineering fundamentals and hands-on project experience, I specialize in building scalable and efficient web applications. Over time, I have explored a wide range of technologies across the full stack, which has made me adaptable and confident in solving diverse challenges. My work goes beyond coding, as I enjoy problem-solving, system design, and contributing to open source projects. I am committed to continuous learning and growth, always striving to stay ahead in the evolving tech landscape, with a particular passion for AI-driven solutions that create meaningful impact.
          </p>
          <p>
            <a href="https://drive.google.com/drive/folders/1XEY9ihwjkKuCjVpPRHKUDBeM-K9oX5iz?usp=drive_link" target="_blank" rel="noopener noreferrer" className='btn btn-secondary' style={{ marginRight: '15px' }}>
            Download Resume</a>
            <a href="#projects" rel="noopener noreferrer" className='btn btn-secondary'>
            View Projects</a>
          </p>
        </Col>
        <Col md={6} sm={12} className='d-flex align-items-center justify-content-center' style={{ zIndex: 1, }}>
          <SkillsCloud />
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;