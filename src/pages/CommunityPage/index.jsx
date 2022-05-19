import React, { useContext, useEffect } from "react";
import PostList from "./PostList";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const CommunityPage = () => {
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    !isLogin && navigate("/login");
  }, []);

  return (
    <>
      <div className="community">
        <PostList />
      </div>
    </>
  );
};

export default CommunityPage;
