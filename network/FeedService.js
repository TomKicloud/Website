import ApiClient from "./apiclient";

class FeedService {
    static async GetPostDTOs(userUUID, auth) {
        return ApiClient.get(`feed/GetPostDTOs?uuid=${userUUID}`, auth);
    }
}

export default FeedService;