import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <header>
            <FontAwesomeIcon className="logo" icon="book-dead" />
            <h1>Captain's Log</h1>
        </header>
    )
}

export default Header