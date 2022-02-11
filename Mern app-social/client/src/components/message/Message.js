import React from "react";
import "./message.css";
const Message = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s88-c-k-c0x00ffffff-no-rj"
          alt=""
          className="messageImg"
        />
        <p className="messageText">This is my new message</p>
      </div>
      <div className="messageBottom">1Hour ago</div>
    </div>
  );
};

export default Message;
