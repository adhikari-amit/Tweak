import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Posts() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/4.jpeg" alt=".." className="postProfileImg"/>
                    <span className="postUserName"> Lama Dev</span>
                    <span className="PostDate">5min ago</span>
                </div>
                <div className="postTopRight">
                <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter"> 
            <span className="postText">Hey! Its my first Post</span>
            <img src="/assets/post/1.jpeg" alt="" className="postImg" />

            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="./assets/like.png" alt="" className="likeIcon"/>
                    <img src="./assets/heart.png" alt="" className="likeIcon"/>
                    <span className="postlikeCounter">32 people like it</span>
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