import axios from "axios"
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from "react";
import moment from "moment"
import {Link} from "react-router-dom"


function Posts({post}) {
    const [user,setUser]=useState({})
    const [like,setLike]=useState(post.Likes.length)

    const PF=process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/users?userId=${post.UserId}`).then((response)=>{
          setUser(response.data)
      })
    },[post.UserId])

    const LikeHandaler=()=>{
        setLike(like+1)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture || PF+"/noprofile.png"} alt=".." className="postProfileImg"/>
                </Link>
                    <span className="postUserName">{user.username}</span>
                    <span className="PostDate">{moment(post.createdAt).fromNow()}</span>
                </div>
                <div className="postTopRight">
                <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter"> 
            <span className="postText">{post.desc}</span>
            <img src="/assets/post/1.jpeg" alt="" className="postImg" />

            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={PF+"/like.png"} alt="" onClick={LikeHandaler} className="likeIcon"/>
                    <img src={PF+"/heart.png"} alt="" onClick={LikeHandaler} className="likeIcon"/>
                    <span className="postlikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts