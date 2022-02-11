import React from "react";
import "./chatOnline.css";
const chatOnline = () => {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s88-c-k-c0x00ffffff-no-rj"
            alt=""
            className="chatOnlineImg"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Mike</span>
      </div>
    </div>
  );
};

export default chatOnline;
