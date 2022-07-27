import axios from "axios"
import { useEffect, useState } from "react"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import { useParams } from 'react-router-dom'
import "./profile.css"

function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
  const {username}=useParams()
  const [profile, setprofile] = useState({})
   useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/users?username=${username}`).then((response)=>{
      setprofile(response.data)
    })
   },[username]) 

  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={profile.profilePicture ||PUBLIC_FOLDER + "/nocover.jpg"} alt="" className="profileCoverImg" />
              <img src={ profile.coverPicture  ||PUBLIC_FOLDER + "/noprofile.png"}alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{profile.username}</h4>
              <span className="profileInfoDesc">{ profile.bio}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar profile={profile} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile