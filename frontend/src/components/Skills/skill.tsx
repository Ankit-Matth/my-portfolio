import React from 'react';
import { Col, Image } from 'react-bootstrap';

interface SkillProps {
  skillImg: string;
}

const Skill: React.FC<SkillProps> = ({ skillImg }) => {
  return (
    <Col xs={4} sm={3} className="d-flex align-items-center justify-content-center my-3">
      <Image src={skillImg} className="rounded skillsImg" style={{ width: '95%' }} />
    </Col>
  );
};

export default Skill;
