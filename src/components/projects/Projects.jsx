import './projects.scss';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

function Projects({projects}) {
    return (
        <div className="projects">
            {/* <p>I'm Proficient in MERN stack development with an interest in DevOps, Machine Learning and Game Development</p> */}
            <div className='left'>
                <MdNavigateBefore color='black'/>

                <div className='project-window'>
                
                    <div className='left'>
                        <img src={projects.image} alt={`${projects.title} image`}></img>
                    </div>

                    <div className='right'>
                        <div className='title'>{projects.title}</div>
                        <div className='tech'>
                            {
                                projects.tech.map((techItem,index)=>{
                                    <div className='tech-item' key={index}>{techItem}</div>
                                })
                            }
                        </div>
                        <div className='description'>
                            {
                                projects.desc.map((descItem,index)=>{
                                    <div className='desc-item' key={index}>{descItem}</div>
                                })
                            }
                        </div>
                    </div>
                
                </div>
                
                <MdNavigateNext color='black'/>
            </div>
            
            <div className='right'>
                {/* <p>Skills</p> */}
                P R O J E C T S
            </div>
            
        </div>
    );
}

export default Projects;