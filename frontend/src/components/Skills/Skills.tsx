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
import cPlusPlusPic from '../images/skills/Cplusplus.png';
import devToolsPic from '../images/skills/devTools.png';
import testingPic from '../images/skills/testing.png';
import mysqlPic from '../images/skills/mysql.png';
import dsaPic from '../images/skills/dsa.png';
import webSocketPic from '../images/skills/webSocket.png';
import deploymentPic from '../images/skills/deployment.png';
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
        <Skill skillImg={mysqlPic}/>
        <Skill skillImg={cPlusPlusPic}/>
        <Skill skillImg={dsaPic}/>
     
        <Skill skillImg={webSocketPic}/>
        <Skill skillImg={devToolsPic}/>
        <Skill skillImg={testingPic}/>
        <Skill skillImg={deploymentPic}/>
      </Row>
    </Container>
  );
}

export default Skills;