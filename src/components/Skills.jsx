import React from 'react'
import { 
  SiHtml5, 
  SiCss3, 
  SiSass, 
  SiJquery, 
  SiReact, 
  SiRedux, 
  SiJest,  
  SiBootstrap, 
  SiTailwindcss, 
  SiFigma, 
  SiNetlify 
} from "react-icons/si";
import { DiJavascript } from "react-icons/di";

const icons = [
  { Icon: SiHtml5, color: '#FF5733', title: "HTML5" },
  { Icon: SiCss3, color: '#264DE4', title: "CSS3" },
  { Icon: SiSass, color: '#CC6699', title: "SASS" },
  { Icon: DiJavascript, color: '#F7DF1E', title: "JavaScript" },
  { Icon: SiJquery, color: '#0769ad', title: "JQuery" },
  { Icon: SiReact, color: '#61DAFB', title: "React" },
  { Icon: SiRedux, color: '#764abc', title: "Redux" },
  /* { Icon: SiJest, color: '#C21325', title: "Jest" }, */
  { Icon: SiBootstrap, color: '#7952B3', title: "Bootstrap" },
  { Icon: SiTailwindcss, color: '#38B2AC', title: "TailwindCSS" },
  { Icon: SiFigma, color: '#0ACF83', title: "Figma" },
  { Icon: SiNetlify, color: '#00C7B7', title: "Netlify" }
];

export default function Skills() {
  return (
    <div className="skill">
        <h3 className='skill_title'>Knowledges</h3>
        <div className="skill_icons">
            {icons.map(({Icon, color, title}, i) => (
              <Icon key={i} color={color} title={title} size={60} className='skill_icons_icon' />
            ))}
        </div>
    </div>
  )
}
