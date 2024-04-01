import './content.scss';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import About from '../about/About';

function Content() {
    return (
        <div className="content">
            <div id='about'><About /></div>
            <div id='skills'><Skills /></div>
            <div id='projects'><Projects /></div>
        </div>
    );
}

export default Content;