import withSession from "../../lib/session";

export default withSession(async (req, res) => {
  const userUUID = req.session.get("userUUID");
  const token = req.session.get("token");
  const refresh = req.session.get("refresh");

  return { userUUID, token, refresh };
});
