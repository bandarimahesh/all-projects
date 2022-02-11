import axios from "axios";
import React, { useEffect, useState } from "react";
import "./conversions.css";

const Conversations = ({ conversation, userCurrent }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== userCurrent._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [userCurrent, conversation]);
  return (
    <div className="conversations">
      <img
        src="https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s88-c-k-c0x00ffffff-no-rj"
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">{user.email}</span>
    </div>
  );
};

export default Conversations;
