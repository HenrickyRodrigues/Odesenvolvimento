import {Header as Estilotopo} from './styles'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Estilotopo>
            <h1 className='logo'>FIAP</h1>
            <nav>
                <ul>
                    <li><Link to="/">Sobre</Link></li>
                    <li><Link to="/formation">Formação</Link></li>
                    <li><Link to="/experiences">Experiências</Link></li>
                    <li><Link to="/hobbies">Hobbies</Link></li>
                </ul>
            </nav>
        </Estilotopo>
    )
}

export default Header;
