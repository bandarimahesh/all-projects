import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";
const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola</b> and <b>3 others</b> have birthdays today
          </span>
        </div>
        <img src="assets/ad.png" alt="Add" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">{user.username} information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">city:</span>
            <span className="rightbarInfoKey">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoKey">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">RelationShip :</span>
            <span className="rightbarInfoKey">{user.relationShip}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/1.jpeg`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Mike</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/2.jpeg`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Mike</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/3.jpeg`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Mike</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/4.jpeg`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Mike</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/5.jpeg`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Mike</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/6.jpeg`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Mike</span>
            </div>
          </div>
        </h4>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
