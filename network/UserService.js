import ApiClient from "./apiclient.js";

class UserService {
    static async getUser(userUUID, auth) {
        return ApiClient.get(`Users/${userUUID}`, auth);
    }

    static async authenticate(authenticator, password, auth) {
        return ApiClient.post("Auth/Authenticate", { authenticatorString: authenticator, password }, auth);
    }

    static async getCurrentUser(auth) {
        return ApiClient.get("Users/CurrentUser", auth);
    }
}

export default UserService;