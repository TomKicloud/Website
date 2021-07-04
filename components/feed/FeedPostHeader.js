const { DateTime } = require("luxon");


const FeedPostHeader = (props) => {
    const post = props.post;

    return(
        <div className="w-full py-3 flex flex-row">
            <img src={post.posterDTO.userProfileImageUrl} className="w-12 h-12 rounded-full"/>
            <p className="self-center px-3 font-bold">{post.posterDTO.userFullName}</p>
            <p className="self-center px-3 italic font-extralight text-sm">{DateTime.fromMillis(new Date(post.postCreatedAt).getTime()).toRelative()}</p>
        </div>
    )
};

export default FeedPostHeader;