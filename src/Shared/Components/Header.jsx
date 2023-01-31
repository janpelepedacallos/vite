
import './Components-Style/header-style.css'

const Header = () => {
    return (
        <div className="header">
            <div className="university-logo">
                <img src="/src/assets/UEP LOGO.png" alt="UEP LOGO.jpg" />

                <h2><span>UNIVERSITY OF EASTERN PHILIPPINES</span></h2>
            </div>

            <div className="logout-admin">
                <a href="#" target={'_blank'}>Logout</a>
            </div>
        </div>
    )
}

export default Header;