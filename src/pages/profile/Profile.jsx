import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./profile.css"

function Profile() {
  return (
    <>
       <Topbar/>
       <div className="profileContainer">
        <Sidebar/>
        <div className="profileRight">
          <div className="profileRightTop">
          <div className="profileCover">
            <img src="assets/post/3.jpeg" alt=""  className="profileCoverImg"/>
            <img src="assets/person/6.jpeg" alt=""  className="profileUserImg"/>
          </div>
           <div className="profileInfo">
            <h4 className="profileInfoName">Lama Dev</h4>
            <span className="profileInfoDesc">Lorem ipsum dolor sit ameti praesentium eligendi. Lorem ipsum dolor sit amet. </span>
           </div>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
          </div>
        </div>
       </div>
    </>
  )
}

export default Profile