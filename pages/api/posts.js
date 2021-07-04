import withSession from "../../lib/session";
import FeedService from "../../network/FeedService";
import UserService from "../../network/UserService";

export default withSession(async (req, res) => {
  const token = req.session.get("token");

  let data = await FeedService.GetFeedPosts(req.query.teamId, req.query.startFrom, req.query.limit, token);
  res.json(data);
});
