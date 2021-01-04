import '../styles/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
    return (
        <nav>
            <ul className="nav-bar">
                <li>
                    <button className="nav-bar__button">
                        <FontAwesomeIcon className="nav-bar__icon" icon="search" />
                    </button>
                </li>
                <li>
                    <button className="nav-bar__button">
                        <FontAwesomeIcon className="nav-bar__icon" icon="home" />
                    </button>
                </li>
                <li>
                    <button className="nav-bar__button">
                        <FontAwesomeIcon className="nav-bar__icon" icon="cog" />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav