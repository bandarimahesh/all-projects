import React, { useEffect, useState } from "react";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import "./post.css";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture}
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              alt=""
              onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              alt=""
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} People like this</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{post.comment} comment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
