import {Link} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'

const Nav=()=>{
    return (
        <NavStyle>
        <header className="nav">
            <div className="container">
                <img className="logo" src="./src/assets/LOGO.png" alt="logo" />
                <ul>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/sobre" className="navLink">Sobre</Link>
                <Link to="/carros" className="navLink">Carros</Link>
                <Link to='/login' className="navLink">Login</Link>
                </ul>
            </div>     
        </header>
        </NavStyle>
    )
}
export default Nav