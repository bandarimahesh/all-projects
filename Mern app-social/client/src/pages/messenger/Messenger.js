import React, { useContext, useEffect, useState } from "react";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import Conversation from "../../components/conversation/Conversations";
import Message from "../../components/message/Message";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./messenger.css";
const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const getConversations = async () => {
      try {
        const response = await axios.get("/conversations/" + user._id);
        setConversations(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user._id]);
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              className="chatMenuInput"
              placeholder="Search for your friends..."
            />
            {conversations.map((c) => (
              <Conversation conversation={c} userCurrent={user} />
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message /> <Message /> <Message /> <Message /> <Message />
              <Message /> <Message /> <Message /> <Message /> <Message />
              <Message /> <Message /> <Message /> <Message /> <Message />
              <Message /> <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatBoxInput"
                placeholder="Enter Your message!"
              ></textarea>
              <button className="chatSubmitButton">Enter</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
