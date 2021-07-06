import { DateTime } from "luxon";
import { Component, useEffect, useState } from "react";
import FeedPostHeader from "./feed/FeedPostHeader";
import FeedCommentsView from "./feed/FeedCommentsView";
import Modal from "react-modal";
import InfiniteScroll from "react-infinite-scroll-component";

const FeedScroller = (props) => {
  const [posts, addPosts] = useState([]);
  const [lastDate, setLastDate] = useState(new Date());
  const [prevY, setPrevY] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const team = props.team;
  const teamId = team.teamId;

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    console.log("GET POSTS");
    fetch(
      `/api/posts?startFrom=${lastDate.getTime()}&teamId=${teamId}&limit=${10}`
    )
      .then((response) => response.json())
      .then((resp) => {
        addNewPosts(resp);
      });
  }

  function addNewPosts(newPosts) {

    if (newPosts.length > 0) {
      addPosts(posts.concat(newPosts));
      setLastDate(new Date(newPosts[newPosts.length - 1].postCreatedAt));
      setCanLoadMore(true);
    } else {
      setCanLoadMore(false);
    }
  }

  function closeModal() {
    setModalOpen(false);
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
    } else if (post.postType === "poll") {
      return (
        <div className="w-full">
          <h1 className="font-bold text-xl text-center">{post.pollQuestion}</h1>
          {post.pollAnswers.map((answer) => (
            <div
              className={`rounded-md m-3 p-6 bg-gray-800 cursor-pointer md:hover:mb-1 hover:mr-1 hover:ml-1 translate ease-in-out`}
              onClick={setModalOpen}
            >
              {answer.answer}
            </div>
          ))}
        </div>
      );
    }

    return <p className="flex-1">Not supported</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-0 md:gap-x-5 overflow-y-hidden pb-3">
      <Modal
        isOpen={modalOpen}
        className="modal"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <span>
          Uh oh! Right now you can only vote on polls from the iOS app, but Gary
          is working hard to make sure you can vote on polls wherever you are,
          check back soon!
        </span>
        <button className="rounded-md shadow-lg px-5 py-3 block m-auto bg-green-800 mt-5" onClick={closeModal}>Okay!</button>
      </Modal>

      <div className="col-span-1">
        <div className="bg-gray-100 dark:bg-darkgraylight shadow-lg rounded-xl p-5 max-h-50 sticky top-0 self-start text-center">
          <h1 className="pageSubtitle">Gary Portal Feed</h1>
          <h3 className="font-bold">{team.team.teamName}</h3>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-1 gap-5 max-h-full overflow-y-auto">
        <InfiniteScroll
          dataLength={posts.length >= 1 ? posts.length : 1}
          next={getPosts}
          hasMore={canLoadMore}
          loader={<p>Loading more posts...</p>}
          endMessage={<p>End of Feed!</p>}
        >
          {posts?.map((post) => (
            <div
              key={post.postId}
              className="bg-gray-100 dark:bg-darkgraylight shadow-lg rounded-xl px-3 mb-5"
            >
              <FeedPostHeader post={post} />
              <div className="flex flex-row gap-1 content-center">
                {getPostContentToDisplay(post)}
                <FeedCommentsView comments={post.comments} description={{ desc: post.postDescription, poster: post.posterDTO, postedAt: post.postCreatedAt }}/>
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
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default FeedScroller;
