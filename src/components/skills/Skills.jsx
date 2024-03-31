import './skills.scss';

function Skills() {
    return (
        <div className="skills">  
            {/* <p>I'm Proficient in MERN stack development with an interest in DevOps, Machine Learning and Game Development</p> */}
            <div className='left'>
                {/* <p>Skills</p> */}
                S k i l l s
            </div>
            <div className='right'>
                <div className='skill'>
                    <div className='title teko-bold'>Web-Dev</div>
                    <div className='skill-grid'>
                        <div className='skill-grid-item'>HTML</div>
                        <div className='skill-grid-item'>CSS</div>
                        <div className='skill-grid-item'>JS</div>
                        <div className='skill-grid-item'>ReactJs</div>
                        <div className='skill-grid-item'>NodeJs</div>
                        <div className='skill-grid-item'>ExpressJs</div>
                    </div>
                </div>

                <div className='skill'>
                    <div className='title teko-bold'>DevOps</div>
                    <div className='skill-grid'>
                        <div className='skill-grid-item'>Docker</div>
                        <div className='skill-grid-item'>Jenkins</div>
                        <div className='skill-grid-item'>Kubernetes</div>
                        <div className='skill-grid-item'>Linux</div>
                    </div>
                </div>

                <div className='skill'>
                    <div className='title teko-bold'>Miscellanous</div>
                    <div className='skill-grid'>
                        <div className='skill-grid-item'>Git</div>
                        <div className='skill-grid-item'>PowerBI</div>
                        <div className='skill-grid-item'>Java</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Skills;