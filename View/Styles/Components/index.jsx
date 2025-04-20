import {react} from "react";
import { useState } from "react";
import SkillLevel from "./SkillLevel";

function Skill1(){
   return(
         <div className="skill-container">
              <h2>Javascript</h2>
              <SkillLevel percentaje="80%"/>
         </div>
   )
} 

function Skill2(){
   return(
         <div className="skill-container">
              <h2>React</h2>
              <SkillLevel percentaje="70%"/>
         </div>
   )
}

function Skill3(){
   return(
         <div className="skill-container">
              <h2>Node.js</h2>
              <SkillLevel percentaje="60%"/>
         </div>
   )
}
