import "./topbar.css";
import  { AccountCircle, ChatBubbleOutline, Search, Notifications } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Saint Hive</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, dates, groups, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <AccountCircle />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatBubbleOutline />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/howtoseethenorthernlights.jpg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}