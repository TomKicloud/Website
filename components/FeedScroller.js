import { DateTime } from "luxon";
import { Component, useEffect, useState } from "react";
import FeedPostHeader from "./feed/FeedPostHeader";
import FeedCommentsView from "./feed/FeedCommentsView";

const FeedScroller = (props) => {
  const [posts, addPosts] = useState([]);
  const [lastDate, setLastDate] = useState(new Date());
  const [prevY, setPrevY] = useState(0);

  const team = props.team;
  const teamId = team.teamId;

  useEffect(() => {
    getPosts();
    return () => {};
  }, []);

  function getPosts() {
    fetch(
      `/api/posts?startFrom=${lastDate.getTime()}&teamId=${teamId}&limit=${10}`
    )
      .then((response) => response.json())
      .then((resp) => {
        addNewPosts(resp);
      });
  }

  function addNewPosts(newPosts) {
    addPosts(newPosts);
    setLastDate(new Date(newPosts[newPosts.length - 1].postCreatedAt));
  }

  function getPostContentToDisplay(post) {
    if (post.postType === "media") {
      if (post.isVideo === true) {
        return (
          <video
            controls
            controlsList="nodownload"
            key={post.postUrl}
            className="max-h-65vh m-auto p-3 mb-3 rounded-md shadow-xl object-cover bg-white dark:bg-darkgray flex-1 object-scale-down"
          >
            <source
              src={post.postUrl}
              type="video/mp4"
              className=" rounded-md"
            ></source>
          </video>
        );
      } else {
        return (
          <img
            src={post.postUrl}
            className="max-w-50% md:max-w-35% m-auto mb-3 rounded-md shadow-xl flex-1"
          ></img>
        );
      }
    }

    return <p className="flex-1">Not supported</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-0 md:gap-x-5 overflow-y-hidden pb-3">
      <div className="col-span-1">
        <div className="bg-gray-100 dark:bg-darkgraylight shadow-lg rounded-xl p-5 max-h-50 sticky top-0 self-start text-center">
          <h1 className="pageSubtitle">Gary Portal Feed</h1>
          <h3 className="font-bold">{team.team.teamName}</h3>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-1 gap-5 max-h-full overflow-y-auto">
        {posts?.map((post) => (
          <div
            key={post.postId}
            className="bg-gray-100 dark:bg-darkgraylight shadow-lg rounded-xl px-3"
          >
            <FeedPostHeader post={post} />
            <div className="flex flex-row gap-1 content-center">
              {getPostContentToDisplay(post)}
              <FeedCommentsView comments={post.comments} />
            </div>
            <div
              className={`w-full block md:hidden font-bold text-center text-xs p-3 ${
                post.comments.length > 0 ? "block" : "hidden"
              }`}
            >
              Visit Gary Portal from the iOS app to view comments on this post
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedScroller;
