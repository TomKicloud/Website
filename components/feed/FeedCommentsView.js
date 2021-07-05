import { DateTime } from "luxon";

const FeedCommentsView = (props) => {
  const comments = props.comments;
  return (
    <div>
      <div
        className={`flex flex-col gap-1 overflow-y-scroll max-h-65vh border-l-2 hidden w-64 md:${
          comments.length > 0 ? "block" : "hidden"
        }`}
      >
        <h1 className="font-bold px-3">Comments:</h1>
        {comments.map((comment) => (
          <div
            key={comment.feedCommentId}
            className="flex flex-col items-start px-3"
          >
            <div className="py-3 flex flex-row">
              <img
                src={comment.userDTO.userProfileImageUrl}
                className="w-8 h-8 rounded-full"
              />
              <p className="self-center px-3 font-bold">
                {comment.userDTO.userFullName}
              </p>
              <p className="self-center px-3 italic font-extralight text-sm">
                {DateTime.fromMillis(
                  new Date(comment.commentedAt).getTime()
                ).toRelative()}
              </p>
            </div>
            <p>{comment.comment}</p>
          </div>
        ))}
        <h1 className='font-bold px-3 text-xs text-center py-5'>Visit Gary Portal from the iOS app to comment on this post</h1>
      </div>
    </div>
  );
};

export default FeedCommentsView;
