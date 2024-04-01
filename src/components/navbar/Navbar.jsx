import './navbar.scss';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { SiGithub } from "react-icons/si";

function Navbar() {
    return (
        <div className="navbar">
            <div className='left'>
                <div className='colorband'></div>
                <div className='options'>Prasanna Eklahare</div>
            </div>
            <div className='right'>
                <a className='options hide' href='#skills'>
                    Skills
                </a>
                <a className='options hide' href='#projects'>
                    Projects
                </a>
                <a className='options hide' href='#contact'>
                    Contact
                </a>
                <a className='options git' href='https://github.com/Hotel-p'>
                    <SiGithub />
                </a>
                <div className='options darkmode'>
                    {/* <CiLight /> */}
                    <MdDarkMode />
                </div>
            </div>
        </div>
    );
}

export default Navbar;