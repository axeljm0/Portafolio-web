import {react} from 'react';
import { useState } from 'react';
import './SkillLevel.css'; // Estilos específicos (opcional)

const SkillLevel = ({percentaje}) => {
const[hovered, setHovered] = useState(false);

    return(
        <div className='skill-container'>
            <div className='skill-bar' 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}>
                <div className='skill-fill' style={{width: percentaje}}></div>
                {hovered && 
                <span className='skill-percentage'>{percentaje}</span>}
            </div>
        </div>
    )
}
export default SkillLevel;