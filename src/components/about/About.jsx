import './about.scss';
import '../../fonts.css';

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
                    Please feel free to drop me a mail if you'd like to collaborate with me!
                </p>
            </div>
            <div className='right'>
                <img src='./developer.svg' alt='About-Section-Image'></img>
            </div>
        </div>
    );
}

export default About;