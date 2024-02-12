import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Projects.css';

import Calculator from '../images/projects/calculator.jpg';
import ToDoList from '../images/projects/toDoList.jpg';
import TicTacToe from '../images/projects/ticTacToe.jpg';
import MazeEscape from '../images/projects/mazeEscape.jpg';
import PersonalDoctor from '../images/projects/personalDoctor.png';
import MyPortfolio from '../images/projects/myPortfolio.png';

import Project from './project';

const projectsData = [
  {
    cardTitle: "Scientific Calculator",
    projectImg: Calculator,
    liveLink: "https://ankit-matth.github.io/scientific-calculator/",
    sourceCode: "https://github.com/Ankit-Matth/scientific-calculator"
  },
  {
    cardTitle: "My ToDo List",
    projectImg: ToDoList,
    liveLink: "https://ankit-matth.github.io/my-toDo-list/",
    sourceCode: "https://github.com/Ankit-Matth/my-toDo-list"
  },
  {
    cardTitle: "Tic Tac Toe",
    projectImg: TicTacToe,
    liveLink: "https://ankit-matth.github.io/tic-tac-toe/",
    sourceCode: "https://github.com/Ankit-Matth/tic-tac-toe"
  },
  {
    cardTitle: "Maze Escape",
    projectImg: MazeEscape,
    liveLink: "https://ankit-matth.github.io/maze-escape/",
    sourceCode: "https://github.com/Ankit-Matth/maze-escape"
  },
  {
    cardTitle: "Personal Doctor",
    projectImg: PersonalDoctor,
    liveLink: "https://personal-doctor.vercel.app/",
    sourceCode: "https://github.com/Ankit-Matth/Personal-Doctor"
  },
  {
    cardTitle: "My Portfolio",
    projectImg: MyPortfolio,
    liveLink: "https://my-portfolio.vercel.app/",
    sourceCode: "https://github.com/Ankit-Matth/my-portfolio"
  }
];

interface ProjectsProps {
  isFluid: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isFluid }) => {
  return (
    <Container id='projects' fluid={isFluid} className={isFluid ? 'px-5 mt-2' : 'mt-2'}>
      <Row><h1>My Projects</h1></Row>
      <Row className='projectsRow projectsFirstRow'>
        {projectsData.slice(0, 2).map(project => (
          <Project key={project.cardTitle} {...project} />
        ))}
      </Row>
      <Row className='projectsRow projectsSecondRow'>
        {projectsData.slice(2, 4).map(project => (
          <Project key={project.cardTitle} {...project} />
        ))}
      </Row>
      <Row className='projectsLastRow'>
        {projectsData.slice(4, 6).map(project => (
          <Project key={project.cardTitle} {...project} />
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
