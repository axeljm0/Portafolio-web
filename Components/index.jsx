import {react} from "react";
import { useState } from "react";
import SkillLevel from "./SkillLevel.jsx";
import "SkillLevel.css";

function Skill1(){
   return(
         <div className="skill-container">
              <h2>C#</h2>
              <SkillLevel percentaje="70%"/>
         </div>
   )
} 

function Skill2(){
   return(
         <div className="skill-container2">
              <h2>.NET</h2>
              <SkillLevel percentaje="10%"/>
         </div>
   )
}

function Skill3(){
   return(
         <div className="skill-container3">
              <h2>Java</h2>
              <SkillLevel percentaje="60%"/>
         </div>
   )
}
