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
                    <a href="https://leetcode.com/u/Ankit-Matth/" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{fill: 'currentColor'}} ><path d="m16.102 17.93-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0 -2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835s.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zm4.709-4.92h-10.145c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/></svg>
                    </a>
                    <a href="https://github.com/Ankit-Matth" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-square-github"></i>
                    </a>
                    <a href="https://twitter.com/ankit_matth/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="mailto:ankitmatth101@gmail.com" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </Col>
        </Row>
        <Row className="p-2 pt-4">
    <Col><h6 className="copyright">&copy; All Rights Reserved</h6></Col>
    <Col><h6 className="credit">Developed by <span style={{color: '#ffc800'}}>Ankit Matth</span></h6></Col>
</Row>

      </Container>
    );
}
  
export default Footer;