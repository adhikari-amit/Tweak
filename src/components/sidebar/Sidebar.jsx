import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';  
import CloseFriend from "../closefriend/CloseFriend";



function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItems">
                  <RssFeedIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText"> Feed</span>
                </li>
                <li className="sidebarListItems">
                  <ChatIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItems">
                  <PlayCircleIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItems">
                  <GroupIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItems">
                  <BookmarkIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItems">
                  <HelpOutlineIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">Questions</span>
                </li>
            </ul>

            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
               <CloseFriend/>
               <CloseFriend/>
               <CloseFriend/>
               <CloseFriend/>
               <CloseFriend/>
               <CloseFriend/>
            </ul>

        </div>
    </div>
  )
}

export default Sidebar