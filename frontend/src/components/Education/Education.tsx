import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import './Education.css';

import BRCM_Logo from '../images/education/BRCM.png';
import SD_School_Logo from '../images/education/SD_Sr_Sec_School.png';
import Janta_High_School_Logo from '../images/education/Janta_High_School.png';
 
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
                        <h3 className='instituteName'>BRCM College of Engineering & Technology, Bahal</h3>
                        <h4 className='courseName'>Bachelor of Technology - BTech, Computer Science</h4>
                        <h5 className='startEndDates'>Oct 2021 - Present (Expected : May 2025)</h5>
                        <h6 className='grades'>Grade: Current CGPA - 8.89, (80.87%)</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body style={{textAlign: 'left'}}>
                    <h6 className='accordionBody'>👉 Currently, I am pursuing my 7th Semester.</h6> 
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
                        <h6 className='grades'>Grade: 96% in 12th (HBSE)</h6>
                    </div>
                </Accordion.Header>
                <Accordion.Body style={{textAlign: 'left'}}>
                    <h6 className='accordionBody'>👉 I shifted to SD Sr. Sec. School, Isharwal in my class 11th because I had choosen non-medical stream which was not available in my previous school. </h6> 
                    <h6 className='accordionBody'>👉 In my 12th class, I have decided to build my career in the programming or software development.</h6>
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
                    <h6 className='accordionBody'>👉 I have completed my 10th class and all schooling before 10th class from Janta High School, Kairu (Bhiwani) which was located near my home town.</h6>
                </Accordion.Body>
          </Accordion.Item>
    </Accordion>
    </Container>
  );
}

export default Education;
