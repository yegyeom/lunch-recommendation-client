import Category from "./Category";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import API from "../../api";
import { getAllCategoryItems } from "../../utils/allCategoryItems";

function PostList() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [postItems, setPostItems] = useState([]);

  const getCategory = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    (async function () {
      const data = await API.community.getPosts();
      if (data) {
        setPostItems(data);
        console.log(data);
      }
    })();
  }, []);

  const categoryItems = getAllCategoryItems();

  const handlePostClick = (info) => {
    console.log(info);
    navigate(`/community/posts/${info.index}`, { state: info });
  };

  const EditDateList = postItems.map((item, idx) => {
    const arr1 = item.created_at.split("T");
    const arr2 = arr1[1].split(".");

    return arr1[0] + " " + arr2[0];
  });

  const postList = postItems.map((item, idx) => {
    return (
      (item.category_name === category || category === "전체") && (
        <Fragment key={idx}>
          <div className="post-list-item">
            <div>{item.category_name}</div>
            <div className="post-info">
              <span onClick={() => handlePostClick(item)}>
                {item.post_title}
              </span>
              <div className="post-detail-info">
                <span>{item.user_nickname}</span>
                &nbsp;
                <span>{EditDateList[idx]}</span>
              </div>
            </div>
          </div>
          <hr />
        </Fragment>
      )
    );
  });

  return (
    <>
      <Category
        getCategory={getCategory}
        categoryItems={categoryItems}
      ></Category>
      {postList}
    </>
  );
}

export default PostList;
