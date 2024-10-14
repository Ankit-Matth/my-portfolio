import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

interface HeaderProps {
  setActiveNavItem: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveNavItem }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2; // Threshold for determining if section is in the middle
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= threshold/5);
  
      const introSection = document.getElementById('intro');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const educationSection = document.getElementById('education');
      const achievementsSection = document.getElementById('achievements');
      const contactSection = document.getElementById('contact');
  
      const setActiveNavItem = (sectionId: string) => {
        const navLinks = document.querySelectorAll('#nav a') as NodeListOf<HTMLAnchorElement>;
        Array.from(navLinks).forEach((link: HTMLAnchorElement) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      };
      
  
      if (introSection && scrollY >= introSection.offsetTop - threshold && scrollY < introSection.offsetTop + introSection.offsetHeight - threshold) {
        setActiveNavItem('intro');
      } else if (skillsSection && scrollY >= skillsSection.offsetTop - threshold && scrollY < skillsSection.offsetTop + skillsSection.offsetHeight - threshold) {
        setActiveNavItem('skills');
      } else if (projectsSection && scrollY >= projectsSection.offsetTop - threshold && scrollY < projectsSection.offsetTop + projectsSection.offsetHeight - threshold) {
        setActiveNavItem('projects');
      } else if (educationSection && scrollY >= educationSection.offsetTop - threshold && scrollY < educationSection.offsetTop + educationSection.offsetHeight - threshold) {
        setActiveNavItem('education');
      } else if (achievementsSection && scrollY >= achievementsSection.offsetTop - threshold && scrollY < achievementsSection.offsetTop + achievementsSection.offsetHeight - threshold) {
        setActiveNavItem('achievements');
      } else if (contactSection && scrollY >= contactSection.offsetTop - threshold && scrollY < contactSection.offsetTop + contactSection.offsetHeight - threshold) {
        setActiveNavItem('contact');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute('href')?.substring(1) || '';
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = document.getElementById('brandName')?.offsetHeight || 0;
      const targetOffset = targetElement.offsetTop - headerHeight * 2.4;

      window.location.href = "#" + targetId;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });
    }
    if (window.innerWidth <= 767) {
      setIsNavbarExpanded(false);
    }

    setActiveNavItem(targetId.charAt(0).toUpperCase() + targetId.slice(1)); 
  };

  return (
    <Navbar expand="md" id="navBar" className={isScrolled ? 'navBarShadow' : ''} expanded={isNavbarExpanded}>
      <Container fluid>
        <Navbar.Brand href="#intro" onClick={handleNavClick} id="brandName">
          @<span>AnkitMatth</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: '1px solid black' }}
          onClick={() => isNavbarExpanded ? setIsNavbarExpanded(false) : setIsNavbarExpanded(true)} />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav id="nav">
            <Nav.Link href="#intro" onClick={handleNavClick} active>
              Intro
            </Nav.Link>
            <Nav.Link href="#skills" onClick={handleNavClick}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavClick}>
              Projects
            </Nav.Link>
            <Nav.Link href="#education" onClick={handleNavClick}>
              Education
            </Nav.Link>
            <Nav.Link href="#achievements" onClick={handleNavClick}>
              Achievements
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
