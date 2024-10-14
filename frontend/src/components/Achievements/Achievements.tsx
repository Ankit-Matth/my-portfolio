import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import myResume from '../images/achievements/myResume.png';
import './Achievements.css';

interface AchievementsProps {
  isFluid: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ isFluid }) => {
  return (
    <Container id='achievements' fluid={isFluid} className={isFluid ? 'px-5' : ''}> 
      <Row>
        <Col md={8} sm={12} style={{ textAlign: 'left' }} className="d-flex align-items-start justify-content-center">
         <div className='achievementsLinks'>
              <h1 id='achievementsHeading'>My Achievements</h1>
              <a href="https://www.linkedin.com/posts/ankit-matth_webwizards-1st-frontend-activity-7166456689557225472-hyeJ?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                  <h3 className='achievements'><i className="fa-solid fa-arrow-right"></i>&nbsp; Got 1st position in HackUniv 2024.</h3>
              </a>
              <a href="https://www.linkedin.com/posts/ankit-matth_hacktoberfest2023-activity-7147959854362427392-N680?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                  <h3 className='achievements'><i className="fa-solid fa-arrow-right"></i>&nbsp; Got a cool T-shirt from DocsGPT.</h3> 
              </a>
              <a href="https://www.linkedin.com/posts/ankit-matth_winner-of-c-language-quiz-activity-7057662549986603008-T_0c?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                  <h3 className='achievements'><i className="fa-solid fa-arrow-right"></i>&nbsp; Got 1st position in C language quiz.</h3>
              </a>
              <a href="https://www.linkedin.com/posts/ankit-matth_hacktoberfest2023-hacktoberfestabr2023-hacktoberfest-activity-7125144823749050369-M1Al?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                  <h3 className='achievements'><i className="fa-solid fa-arrow-right"></i>&nbsp; Completed Hacktoberfest 2023 with 10 PRs. </h3>
              </a>
          </div>
        </Col>

        <Col md={4} sm={12} className="d-flex flex-column align-items-start justify-content-start resumeBox">
          <Image src={myResume} className='rounded' id='resumePic'/>
          <Button variant="primary" href='https://drive.google.com/drive/folders/1XEY9ihwjkKuCjVpPRHKUDBeM-K9oX5iz?usp=drive_link' className='mt-2' id='downloadBtn'>Download Resume</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Achievements;
