import withSession from "../../lib/session";
import UserService from "../../network/UserService";

export default withSession(async (req, res) => {
  const userUUID = req.session.get("userUUID");
  const token = req.session.get("token");
  const refresh = req.session.get("refresh");

  if (userUUID && token && refresh) {
    await UserService.getUser(userUUID, token)
      .then((resp) => {
        res.json({
            isLoggedIn: true,
            ...resp
        });
      })
      .catch(() => {
        res.json({
            isLoggedIn: false
        });
      });
  } else {
    res.json({
        isLoggedIn: false
    });
  }
});
