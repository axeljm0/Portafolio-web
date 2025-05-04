import React, {react} from "react";
import SkillLevel from "./SkillLevel.jsx";

import React from 'react';
import SkillBar from './SkillLevel.jsx';

const Skills = () => {
  return (
    <div>
      <SkillBar language="JavaScript" percentage={85} />
      <SkillBar language="Python" percentage={70} />
      <SkillBar language="C++" percentage={50} />
    </div>
  );
};

export default Skills;
