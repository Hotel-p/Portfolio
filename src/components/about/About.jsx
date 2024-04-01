import './about.scss';
import '../../fonts.scss';

import developer from '../../assets/developer.svg'
import pdf from '../../assets/Prasanna-Eklahare-Resume.pdf';


function About() {
    return (
        <div className="about teko-light">
            <div className='left'>
                <p>Hello there, I'm Prasanna Eklahare.</p>
                <p>Welcome to my portfolio website!</p>
                <p>
                    I am a Full-Stack JS Developer with a keen interest in all things related to computers.
                    Currently, i am mastering DevOps technologies such as Docker, Jenkins and kubernetes to learn
                    workflow optimization.
                </p>
                <p>
                    Please feel free to drop a message in the message box below, if you'd like to collaborate with me!
                </p>
                <a href={pdf}>View Resume</a>
            </div>
            <div className='right'>
                <img src={developer} alt='About-Section-Image'></img>
            </div>
        </div>
    );
}

export default About;