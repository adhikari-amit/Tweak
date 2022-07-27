import axios from "axios"
import { useEffect, useState } from "react"
import Posts from "../posts/Posts"
import Share from "../share/Share"
import "./feed.css"

function Feed({username}) {
  const [post,setPost]=useState([])
  useEffect(()=>{
    username ? axios.get(`http://127.0.0.1:8000/api/post/timeline/${username}`).then((response)=>{
      setPost(response.data)
     
    }) : axios.get('http://127.0.0.1:8000/api/post').then((response)=>{
      setPost(response.data)
     
    })
  },[username])
  console.log(post);
  return (
    <div className="feed">
        <div className="feedWrapper">
            <Share/>
            {post.map((data)=>{
              return(
              <Posts key={data.id} post={data}/>
              )
            })
              
            }
        </div>
    </div>
  )
}

export default Feed