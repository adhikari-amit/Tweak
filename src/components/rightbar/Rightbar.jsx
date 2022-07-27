import Online from "../online/Online"
import "./rightbar.css"


function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
      <>
        <div className="birthdayContainer">
                <img src="assets/gift.png" alt=""  className="birthdayImg"/>
                <span className="birthdayText"> <b> Pola Poster </b> and <b>  3 other friends</b> have birthday today.</span>
            </div>
            <img src="./assets/ad.png" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">          
                <Online/>
                <Online/>
                <Online/>
                <Online/>
                <Online/>

            </ul>
      </>
    )
  }
  const ProfileRightbar=()=>{
    return(
      <>
        <h4 className="rightbarTitle1">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">City:</span>
            <span className="rightbarInfoValue">{profile.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">From:</span>
            <span className="rightbarInfoValue">{profile.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship:</span>
            <span className="rightbarInfoValue">{ profile.relationStatus===0 ? "Single" : "Married" }</span>
          </div>
        </div>

        <h4 className="rightbarTitle1">User Friends</h4>

        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="./assets/person/8.jpeg" alt=""  className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/8.jpeg" alt=""  className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/8.jpeg" alt=""  className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/8.jpeg" alt=""  className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/8.jpeg" alt=""  className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src="./assets/person/8.jpeg" alt=""  className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John Doe</span>
          </div>
        </div>

      </>
    )
  }
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
            { profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}

export default Rightbar