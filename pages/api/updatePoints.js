import withSession from "../../lib/session";
import UserService from "../../network/UserService";

export default withSession(async (req, res) => {
  const userUUID = req.session.get("userUUID");
  const token = req.session.get("token");
  const refresh = req.session.get("refresh");

  let data = await UserService.updateUserPoints(userUUID, req.body, token);
  res.json(data);
});
