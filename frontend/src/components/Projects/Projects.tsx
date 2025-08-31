import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import Calculator from '../../images/projects/calculator.jpg';
import ToDoList from '../../images/projects/toDoList.jpg';
import TicTacToe from '../../images/projects/ticTacToe.jpg';
import MazeEscape from '../../images/projects/mazeEscape.jpg';
import PersonalDoctor from '../../images/projects/personalDoctor.jpg';
import MyPortfolio from '../../images/projects/myPortfolio.jpg';
import JobGenie from '../../images/projects/jobGenie.jpg';
import DocsGPT from '../../images/projects/docsGPT.jpg';

import './Projects.css';

interface Project {
  id: number;
  title: string;
  color: string;
  gradient: string;
  projectVideo: string,
  skills: string;
  liveLink: string,
  moreDetails: string
}

interface ProjectsProps {
  isFluid: boolean;
}


const projectsData: Project[] = [
  { 
    id: 1, 
    title: "Maze Escape", 
    color: "#45b7d1",
    gradient: "linear-gradient(135deg, #45b7d1 0%, #2980b9 100%)",
    projectVideo: MazeEscape,
    skills: "HTML, CSS, JavaScript, p5.js, p5.sound.js",
    liveLink: "https://ankit-matth.github.io/maze-escape/",
    moreDetails: "https://github.com/Ankit-Matth/maze-escape"
  },
  { 
    id: 2, 
    title: "My Portfolio", 
    color: "#e056fd",
    gradient: "linear-gradient(135deg, #e056fd 0%, #9c88ff 100%)",
    projectVideo: MyPortfolio,
    skills: "HTML, CSS, TypeScript, MERN Stack, React-Bootstrap",
    liveLink: "https://ankit-matth-portfolio.vercel.app/",
    moreDetails: "https://github.com/Ankit-Matth/my-portfolio"
  },
  { 
    id: 3, 
    title: "Personal Doctor", 
    color: "#fd9644",
    gradient: "linear-gradient(135deg, #fd9644 0%, #f39c12 100%)",
    projectVideo: PersonalDoctor,
    skills: "Node.js, Express.js, MongoDB, ChatGPT API, Handlebars, Bootstrap",
    liveLink: "https://personal-doctor.vercel.app/",
    moreDetails: "https://github.com/Ankit-Matth/Personal-Doctor"
  },
  { 
    id: 4, 
    title: "Job Genie", 
    color: "#f9ca24",
    gradient: "linear-gradient(135deg, #f9ca24 0%, #f0932b 100%)",
    projectVideo: JobGenie,
    skills: "Next.js, Tailwind CSS, Express.js, Puppeteer",
    liveLink: "https://the-job-genie.vercel.app/",
    moreDetails: "https://github.com/Ankit-Matth/JobGenie"
  },
  { 
    id: 5, 
    title: "DocsGPT", 
    color: "#a55eea",
    gradient: "linear-gradient(135deg, #a55eea 0%, #8b5cf6 100%)",
    projectVideo: DocsGPT,
    skills: "React, Next.js, Tailwind, TypeScript, Flask, Docker, LLMs, RAG, Ollama",
    liveLink: "https://app.docsgpt.cloud/", 
    moreDetails: "https://github.com/arc53/DocsGPT/pulls?q=+is:pr+author:Ankit-Matth"
  },
  { 
    id: 6, 
    title: "Multiplayer Tic-Tac-Toe", 
    color: "#26de81",
    gradient: "linear-gradient(135deg, #26de81 0%, #20bf6b 100%)",
    projectVideo: TicTacToe,
    skills: "React.js, Socket.io, Cypress",
    liveLink: "https://ankit-matth.github.io/tic-tac-toe/",
    moreDetails: "https://github.com/Ankit-Matth/tic-tac-toe"
  },
  { 
    id: 7, 
    title: "Scientific Calculator", 
    color: "#ff6b6b",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)",
    projectVideo: Calculator,
    skills: "HTML, CSS, JavaScript, Regex",
    liveLink: "https://ankit-matth.github.io/scientific-calculator/",
    moreDetails: "https://github.com/Ankit-Matth/scientific-calculator"
  },
  { 
    id: 8, 
    title: "My ToDo List", 
    color: "#4ecdc4",
    gradient: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
    projectVideo: ToDoList,
    skills: "HTML, CSS, JavaScript",
    liveLink: "https://ankit-matth.github.io/my-toDo-list/",
    moreDetails: "https://github.com/Ankit-Matth/my-toDo-list"
  }
];

const Projects: React.FC<ProjectsProps> = ({ isFluid }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const infiniteProjects = [...projectsData, ...projectsData, ...projectsData];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastTime = 0;
    const SCROLL_COOLDOWN = 300;
    const STEP = 1;         

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      if (now - lastTime < SCROLL_COOLDOWN) return; // ignore too-fast scrolls
      lastTime = now;

      const delta = e.deltaY > 0 ? STEP : -STEP;
      setScrollPosition(prev => prev + delta);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      container.dataset.startX = touch.clientX.toString();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!container.dataset.startX) return;

      const touch = e.touches[0];
      const startX = parseInt(container.dataset.startX);
      const currentX = touch.clientX;
      const diff = startX - currentX;

      if (Math.abs(diff) > 50) {
        const delta = diff > 0 ? STEP : -STEP;
        setScrollPosition(prev => prev + delta);
        container.dataset.startX = currentX.toString();
      }
    };

    container.addEventListener('wheel', handleScroll, { passive: false });
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);

    return () => {
      container.removeEventListener('wheel', handleScroll);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    const centerIndex = Math.floor(infiniteProjects.length / 2);
    const startIndex = centerIndex + scrollPosition - 4;
    
    for (let i = 0; i < 9; i++) {
      const projectIndex = ((startIndex + i) % projectsData.length + projectsData.length) % projectsData.length;
      const project = projectsData[projectIndex];
      const position = i - 4; // -4 to 4, where 0 is center
      
      cards.push({
        ...project,
        position,
        uniqueKey: `${projectIndex}-${startIndex + i}`
      });
    }
    
    return cards;
  };

  const handleCardClick = (position: number) => {
    if (position !== 0) {
      setScrollPosition(prev => prev + position);
    }
  };

  const visibleCards = getVisibleCards();

  return (
    <Container id='projects' fluid={isFluid} className={isFluid ? 'px-5' : ''}>
      <div className="carousel-wrapper">
        <div className="carousel-container" ref={containerRef}>
          <div className="carousel-stage">
            {visibleCards.map((card) => (
              <div
                key={card.uniqueKey}
                className={`carousel-card position-${card.position}`}
                onClick={() => handleCardClick(card.position)}
                style={{
                  background: card.gradient,
                  cursor: card.position !== 0 ? 'pointer' : 'default'
                }}
              >
                <div className="card-content">
                  <div className='card-image'><img src={card.projectVideo} alt={card.title} /></div>
                  <h3 className="card-title">{card.title}</h3>
                  <div className="card-skills">
                    {card.skills}
                  </div>
                  <div>
                    <a className='liveLinkBtn' href={card.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Link
                    </a>
                    <a className='moreDetailsBtn' href={card.moreDetails} target="_blank" rel="noopener noreferrer">
                      More Details
                    </a>
                  </div>
                  <div className="card-overlay"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-info">
          <h2 className="info-title">
            My Projects
          </h2>
          <p className="info-description">
           A showcase of the projects I’ve built using different technologies and problem-solving approaches. Swipe or scroll to explore, and click a card to bring it into focus for more details.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
