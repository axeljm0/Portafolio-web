import {react} from 'react';
import { useState } from 'react';
import Styles from  "SkilLevel.css"; // Estilos específicos (opcional)
 
const SkillBar = ({ language, percentage }) => {
    const [hovered, setHovered] = useState(false);
  
    return (
      <div 
        className={styles.skill} 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
      >
        <span className={styles.language}>{language}</span>
  
        {hovered && (
          <div className={styles.barContainer}>
            <div 
              className={styles.bar} 
              style={{ width: `${percentage}%` }}
            >
              <span className={styles.label}>{percentage}%</span>
            </div>
          </div>
        )}
      </div>
      
    );
  };
  
  export default SkillBar;
    