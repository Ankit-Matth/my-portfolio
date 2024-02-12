import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import myPic from '../images/myPic.jpg';
import './Intro.css';

interface IntroProps {
  isFluid: boolean;
}

const Intro: React.FC<IntroProps> = ({ isFluid }) => {
  return (
    <Container id='intro' fluid={isFluid} className={isFluid ? 'px-5' : ''}>
        <Row className='p-3 flex-md-row flex-sm-row flex-xs-column-reverse'>
          <Col sm={5} xs={12} className="d-flex align-items-center justify-content-center order-sm-2">
            <Image src={myPic} className="border border-2 rounded myPic" style={{width: '78%'}}/>
          </Col>

          <Col sm={7} xs={12} style={{textAlign: 'left'}} className="d-flex flex-column justify-content-center order-sm-1">
                <h1 id='hiMsg'>Hello<span>&#x1F44B;</span>, <br />I'm Ankit Matth</h1>
                <h5 className="text-justify">&#x1F393;A pre-final year Computer Science Engineering student at BRCM College of Engineering and Technology, Bahal. And an enthusiastic tech lover on a mission to dive deeper into Full Stack Development.&#x1F4BB;</h5>
                <h5 className='mt-2 mb-2'>&#x1F449; Let's connect and create something extraordinary! &#128640;&#x1F3AF;</h5>
                <div className="social-icons">
                    <a href="https://github.com/Ankit-Matth" target="_blank" rel="noopener noreferrer" style={{marginLeft: '0'}}>
                      <i className="fab fa-square-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ankit-matth" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/ankit_matth/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/ankit_matth_official/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:ankitmatth101@gmail.com" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-envelope"></i>
                    </a>
                </div>
          </Col>
        </Row>
    </Container>
  );
}

export default Intro;
