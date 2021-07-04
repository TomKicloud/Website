import withSession from "../lib/session";
import GetTokensFromServer from "../lib/getTokens";
import GetUserFromServer from "../lib/getUser";
import FeedScroller from "../components/FeedScroller";

export const getServerSideProps = withSession(async function ({ req, res }) {
  let user = await GetUserFromServer(req, res);
  let { token, refresh } = await GetTokensFromServer(req, res);

  if (!user || !token || !refresh) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
      props:{
          user: user
      }
  }
});

const Feed = (props) => {
  return (
      <div className="pageContainer">
          <FeedScroller team={props.user.userTeam}/>
      </div>
  );
};

export default Feed;
