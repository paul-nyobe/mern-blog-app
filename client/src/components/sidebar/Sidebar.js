import './sidebar.css'
import authorImg from '../../assets/pexels-ksenia-chernaya-4048682.jpg'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">about me</span>
                <img src={authorImg} alt="authorImg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis ducimus, commodi quos excepturi temporibus</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">life</li>
                    <li className="sidebarListItem">music</li>
                    <li className="sidebarListItem">style</li>
                    <li className="sidebarListItem">sport</li>
                    <li className="sidebarListItem">cinema</li>
                    <li className="sidebarListItem">tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
