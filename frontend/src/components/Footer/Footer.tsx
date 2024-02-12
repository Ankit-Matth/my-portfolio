import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer () {
    return (
      <Container id='footer' fluid> 
        <Row className='p-5' style={{borderBottom: '1px solid gray'}}>
            <Col sm={6} xs={12}>
                <h2 className='interestedText'>Interested to work with me?</h2>
                <h4 className='emailText '>Just drop a email : <span>ankitmatth101@gmail.com</span></h4>
            </Col>
            <Col sm={6} xs={12}>
                <h2 id='connectWithMe'>Connect with me:</h2>
                <div className='footer-icons'>
                    <a href="https://www.linkedin.com/in/ankit-matth" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Ankit-Matth" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-square-github"></i>
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
        <Row className="p-2 pt-4">
    <Col><h6 className="copyright">&copy; All Rights Reserved</h6></Col>
    <Col><h6 className="credit">Designed by <span style={{color: '#ffc800'}}>Ankit Matth</span></h6></Col>
</Row>

      </Container>
    );
}
  
export default Footer;