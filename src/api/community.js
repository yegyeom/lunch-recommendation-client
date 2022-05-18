import { doFetch } from "./axios";

const community = {
    getPosts: async () => {
        return await doFetch('GET', '/community/posts')
    },
    createPost: async (params) => {
        return await doFetch('POST', '/community/posts', { params })
    },
    getPost: async (params) => {
        return await doFetch("GET", `/community/posts/${params.id}`)
    },
    createComment: async (params) => {
        return await doFetch("POST", '/community/comments', { params })
    },
}
export default community;