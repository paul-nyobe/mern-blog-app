import './topbar.css'
import logo from '../../assets/pexels-ksenia-chernaya-4048682.jpg'
import { Link } from 'react-router-dom'

const Topbar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >home</Link>
                    </li>
                    <li className="topListItem">about</li>
                    <li className="topListItem">contact</li>
                    <li className="topListItem">write</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src={logo} alt="logo" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
