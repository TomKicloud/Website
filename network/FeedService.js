import ApiClient from "./apiclient";

class FeedService {
    static async GetPostDTOs(userUUID, auth) {
        return ApiClient.get(`feed/GetPostDTOs?uuid=${userUUID}`, auth).then((resp) => { return resp.data }).catch(() => { return null});
    }

    static async GetFeedPosts(teamId, startFrom = new Date(), limit = 10, auth) {
        return ApiClient.get(`feed?startfrom=${startFrom}&limit=${limit}&teamId=${teamId}&includeComments=true`, auth).then((resp) => { return resp.data }).catch((error) => { console.log(error)});
    }
}

export default FeedService;