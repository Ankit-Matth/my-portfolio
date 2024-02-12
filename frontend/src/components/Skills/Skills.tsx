import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Skills.css';

import htmlPic from '../images/skills/html.png';
import cssPic from '../images/skills/css.png';
import jsPic from '../images/skills/js.png';
import bootstrapPic from '../images/skills/bootstrap.png';
import mongodbPic from '../images/skills/mongodb.png';
import expressPic from '../images/skills/express.png';
import reactPic from '../images/skills/react.png';
import nodePic from '../images/skills/node.png';
import typescriptPic from '../images/skills/typescript.png';
import versionControlPic from '../images/skills/versionControl.png';
import devToolsPic from '../images/skills/devTools.png';
import testingPic from '../images/skills/testing.png';
import Skill from './skill';

interface SkillsProps {
  isFluid: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isFluid }) => {
  return (
    <Container id='skills' fluid={isFluid} className={isFluid ? 'px-5' : ''}>
      <h1>My Skills</h1>
      <Row className='mx-2 my-4'>
        <Skill skillImg={htmlPic}/>
        <Skill skillImg={cssPic}/>
        <Skill skillImg={jsPic}/>
        <Skill skillImg={bootstrapPic}/>
  
        <Skill skillImg={mongodbPic}/>
        <Skill skillImg={expressPic}/>
        <Skill skillImg={reactPic}/>
        <Skill skillImg={nodePic}/>
     
        <Skill skillImg={typescriptPic}/>
        <Skill skillImg={versionControlPic}/>
        <Skill skillImg={devToolsPic}/>
        <Skill skillImg={testingPic}/>
      </Row>
    </Container>
  );
}

export default Skills;