import {react} from 'react';
import { useState } from 'react';
import './SkillLevel.css'; // Estilos específicos (opcional)
 
const SkillLevel = ({percentaje, color="white"}) => {
const[hovered, setHovered] = useState(false);
    return(
        <div className='skill-container'
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
        style={{
            withth: '200px',
            height: '20px',
            backgroundcolor: '#e0e0e0',
        }}>
            <div className='skill-bar' >
                <div className='skill-level' 
                style={{
                    width: percentaje,
                    height: '100%',
                    backgroundColor: hovered ? color : '#007bff',
                    transition: 'width 0.5s ease-in-out',
                }}>
                          
         </div>
    </div>
 </div>
    )
}
export default SkillLevel;