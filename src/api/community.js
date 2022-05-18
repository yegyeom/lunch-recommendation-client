import { doFetch } from "./axios";

const community = {
    getPosts: async () => {
        return await doFetch('GET', '/community/posts')
    },
    createPost: async (params) => {
        return await doFetch('POST', '/community/posts', { params })
    }
}
export default community;