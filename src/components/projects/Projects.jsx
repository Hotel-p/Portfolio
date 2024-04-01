import './projects.scss';
import '../../fonts.scss';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import ProjectDa from './ProjectDa';
import { useState } from 'react';

function Projects() {
    let [num,setNum] = useState(0);
    console.log(num);
    let ProjectData = ProjectDa[num];

    const nextClick = ()=>{
        setNum((prev) => prev === 4 ? 0 : prev + 1);
    }

    const backClick = () => {
        setNum((prev) => prev === 0 ? 4 : prev - 1);
    }
    
    return (
        <div className="projects">

            <div className='left'>
                <MdNavigateBefore color='black' className='navigation-icons' onClick={backClick}/>

                <div className='project-window'>
                    <div className='window-left'>
                        {
                            ProjectData.image.map((item,index) => (
                                <img key={index} src={item} alt='image-item'></img>
                            ))    
                        }
                        {/* <img src={ProjectData.image} alt={`${ProjectData.title} image`}></img> */}
                    </div>
                    <div className='window-right'>
                        <div className='title teko-bold'>{ProjectData.title}</div>
                        <div className='tech'>
                            {
                                ProjectData.tech.map((techItem, index) => (
                                    <div className='tech-item teko-medium' key={index}>{techItem}</div>
                                ))
                            }
                        </div>

                        <ul className='desc'>
                            {
                                ProjectData.desc.map((descItem,index)=>(
                                    <li className='desc-item teko-light' key={index}>{descItem}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                
                <MdNavigateNext color='black' className='navigation-icons' onClick={nextClick}/>
            </div>
            

            <div className='right'>
                <p>P R O J E C T S</p>
            </div>
            
        </div>
    );
}

export default Projects;