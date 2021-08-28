import './settings.css'
import authorImg from '../../assets/pexels-ksenia-chernaya-4048682.jpg'
import { Sidebar } from '../../components/sidebar/Sidebar'

export const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <div className="settingsUpdateTitle">Update Your Account</div>
                    <div className="settingsDeleteTitle">Delete Account</div>
                </div>
                <form className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img src={authorImg} alt="authorImg" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label> UserName</label>
                    <input type="text" placeholder="ksenia" />
                    <label> Email</label>
                    <input type="text" placeholder="ksenia@gmail.com" />
                    <label> Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
