import './content.scss';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import About from '../about/About';

function Content() {
    return (
        <div className="content">
            <About />
            <Skills />
            <Projects />
        </div>
    );
}

export default Content;