import UserService from "../network/UserService";

export default async function GetUserFromServer(req, res) {
  const userUUID = req.session.get("userUUID");
  const token = req.session.get("token");
  const refresh = req.session.get("refresh");

  if (userUUID && token && refresh) {
    return await UserService.getUser(userUUID, token)
      .then((resp) => {
          return resp.data;
      })
      .catch(() => {
        return null;
      });
  } else {
    return null;
  }
}