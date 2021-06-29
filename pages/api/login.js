import withSession from "../../lib/session";
import UserService from "../../network/UserService";

export default withSession(async (req, res) => {
  const user = await UserService.authenticate(
    req.body.authenticator,
    req.body.password
  )
    .then((resp) => {
      return resp;
    })
    .catch(() => {
      return null;
    });

  if (user) {
    req.session.set("userUUID", user.userUUID);
    req.session.set("token", user.userAuthTokens.authenticationToken);
    req.session.set("refresh", user.userAuthTokens.refreshToken);
    await req.session.save();
    res.json(user);
  } else {
    res.status(401).json(null);
  }
});
