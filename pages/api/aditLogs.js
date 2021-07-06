import withSession from "../../lib/session";
import FeedService from "../../network/FeedService";

export default withSession(async (req, res) => {
  const token = req.session.get("token");

  let data = await FeedService.GetAditLogs(req.query.teamId, token);
  res.json(data);
});
