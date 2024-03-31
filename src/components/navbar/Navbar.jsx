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
                <div className='options'>
                    Skills
                </div>
                <div className='options'>
                    Projects
                </div>
                <a className='options' href='#contact'>
                    Contact
                </a>
                <div className='options git'>
                    <SiGithub />
                </div>
                <div className='options darkmode'>
                    {/* <CiLight /> */}
                    <MdDarkMode />
                </div>
            </div>
        </div>
    );
}

export default Navbar;