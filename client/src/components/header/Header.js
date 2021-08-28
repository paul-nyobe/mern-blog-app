import './header.css'
import headerImg from '../../assets/pexels-teddy-tavan-1457611.jpg'

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src={headerImg} alt="" className="headerImg" />
        </div>
    )
}

export default Header
