import './navbar.scss';

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
                    About
                </div>
                <div className='options'>
                    Contact
                </div>
            </div>
        </div>
    );
}

export default Navbar;