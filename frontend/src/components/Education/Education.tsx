import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import './Education.css';

import BRCM_Logo from '../../images/education/BRCM.png';
import SD_School_Logo from '../../images/education/SD_Sr_Sec_School.png';
import Janta_High_School_Logo from '../../images/education/Janta_High_School.png';
 
interface EducationProps {
    isFluid: boolean;
}
  
const Education: React.FC<EducationProps> = ({ isFluid }) => {
  return (
    <Container id='education' fluid={isFluid} className={isFluid ? 'px-5 mt-2' : 'mt-2'}>
        <h1>Education</h1>
        <Accordion id='accordian'>
          <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <div className='col-2 d-flex align-items-center justify-content-center rightMargin'>
                        <Image src={BRCM_Logo} style={{width: '95%'}}/>
                    </div>
                    <div className='col-8'>
                        <h3 className='instituteName'>BRCM College of Engineering and Technology, Bahal</h3>
                        <h4 className='courseName'>Bachelor of Technology in Computer Science Engineering</h4>
                        <h5 className='startEndDates'>August 2021 - July 2025 </h5>
                        <h6 className='grades'>Grade: Current CGPA - 8.86, (80.15%)</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body style={{textAlign: 'left'}}>
                    <h6 className='accordionBody'>
                        👉It has been an incredible 4-year journey full of learning, where every semester was a chapter of growth, fun, and unforgettable memories. From tackling challenging projects, practical labs, and plenty of exams to late-night study sessions (every engineer’s favorite!), I embraced every opportunity to grow technically and personally. <br></br><br></br>
                        
                        ✨Along the way, I enhanced my communication, public speaking, and teamwork skills, built many meaningful connections across campus, and enjoyed college life with lecture bunks, fresher and farewell parties, annual functions, and many other memorable moments. <br></br><br></br>
                        
                        🏆I’m proud to have completed my BTech with 80.15%, without a single backlog, while creating countless amazing memories, being a day scholar, and a consistent backbencher.</h6> 
                </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <div className='col-2 d-flex align-items-center justify-content-center rightMargin'>
                        <Image src={SD_School_Logo} style={{width: '88%'}}/>
                    </div>
                    <div className='col-8'>
                        <h3 className='instituteName'>SD Senior Secondary School, Isharwal</h3>
                        <h4 className='courseName'>12th, Non-Medical (PCM)</h4>
                        <h5 className='startEndDates'>April 2020 - March 2021</h5>
                        <h6 className='grades'>Grade: 96.4% in 12th (HBSE)</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body style={{textAlign: 'left'}}>
                    <h6 className='accordionBody'>
                        🎓I shifted to SD Sr. Sec. School, Isharwal in 11th grade because I had chosen the non-medical stream, which was not available in my previous school. This stream was chosen partly by chance and partly based on advice from others, considering my high 10th-grade percentage. <br></br><br></br>

                        💻Most of my 11th and 12th preparation was completed through online batches from the Physics Wallah platform, specifically the Accelerate batch. While the course itself focused on academics, observing how the platform functioned, including its app, website, payment system, and overall backend, sparked my curiosity and passion for technology. This experience motivated me to pursue a career as a software engineer.
                    </h6> 
                </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <div className='col-2 d-flex align-items-center justify-content-center rightMargin'>
                        <Image src={Janta_High_School_Logo} style={{width: '92%'}}/>
                    </div>
                    <div className='col-8'>
                        <h3 className='instituteName'>Janta High School, Kairu</h3>
                        <h4 className='courseName'>10th</h4>
                        <h5 className='startEndDates'>April 2018 - March 2019</h5>
                        <h6 className='grades'>Grade: 93.4% in 10th (HBSE)</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body style={{textAlign: 'left'}}>
                    <h6 className='accordionBody'>
                        🎓I completed my 10th grade, along with all my earlier schooling, from Janta High School, Kairu (Bhiwani), which was located near my hometown. Although it was a private English-medium school, being in a rural area it lacked many facilities and resources. <br></br><br></br>

                        📱Until I passed 10th grade, I had never used the internet, only heard that it existed in smartphones. Surprisingly, I became the school topper in my 10th boards, which no one, including me, expected. I still remember failing Mathematics in the pre-boards and starting to work hard from that point. Even then, I never thought I would score so well in the final exams.
                    </h6>
                </Accordion.Body>
          </Accordion.Item>
    </Accordion>
    </Container>
  );
}

export default Education;
