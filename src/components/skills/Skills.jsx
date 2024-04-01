import './skills.scss';
import '../../fonts.scss';

import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiPowerbi } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";


function Skills() {
    return (
        <div className="skills">  
            {/* <p>I'm Proficient in MERN stack development with an interest in DevOps, Machine Learning and Game Development</p> */}
            <div className='left'>
                {/* <p>Skills</p> */}
                <p>S k i l l s</p>
            </div>
            <div className='right'>
                <div className='skill'>
                    <div className='title teko-bold'>Web-Dev</div>
                    <div className='skill-grid'>
                        <div className='skill-grid-item'><p>HTML</p> <div className='skill-grid-item-img'><FaHtml5/></div></div>
                        <div className='skill-grid-item'><p>CSS</p> <div className='skill-grid-item-img'><FaCss3Alt /></div></div>
                        <div className='skill-grid-item'><p>SASS</p> <div className='skill-grid-item-img'><FaSass /></div></div>
                        <div className='skill-grid-item'><p>JS</p> <div className='skill-grid-item-img'><IoLogoJavascript /></div></div>
                        <div className='skill-grid-item'><p>ReactJs</p> <div className='skill-grid-item-img'><RiReactjsFill /></div></div>
                        <div className='skill-grid-item'><p>NodeJs</p> <div className='skill-grid-item-img'><DiNodejs /></div></div>
                        <div className='skill-grid-item'><p>ExpressJs</p> <div className='skill-grid-item-img'><SiExpress /></div></div>
                    </div>
                </div>

                <div className='skill'>
                    <div className='title teko-bold'>DevOps</div>
                    <div className='skill-grid'>
                        <div className='skill-grid-item'><p>Docker</p> <div className='skill-grid-item-img'><FaDocker /></div></div>
                        <div className='skill-grid-item'><p>Jenkins</p> <div className='skill-grid-item-img'><FaJenkins color='black'/></div></div>
                        <div className='skill-grid-item'><p>Kubernetes</p> <div className='skill-grid-item-img'><SiKubernetes /></div></div>
                        <div className='skill-grid-item'><p>Linux</p> <div className='skill-grid-item-img'></div><FaLinux /></div>
                    </div>
                </div>

                <div className='skill'>
                    <div className='title teko-bold'>Miscellaneous</div>
                    <div className='skill-grid'>
                        <div className='skill-grid-item'><p>Git</p> <div className='skill-grid-item-img'><FaGitAlt /></div></div>
                        <div className='skill-grid-item'><p>PowerBI</p> <div className='skill-grid-item-img'><SiPowerbi /></div></div>
                        <div className='skill-grid-item'><p>Java</p> <div className='skill-grid-item-img'><FaJava /></div></div>
                        <div className='skill-grid-item'><p>Machine Learning</p> <div className='skill-grid-item-img'><GiArtificialIntelligence /></div></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Skills;