import { doFetch } from "./axios";

const community = {
    getPosts: async () => {
        return await doFetch('GET', '/community/posts')
    },
    createPost: async (params) => {
        return await doFetch('POST', '/community/posts', { params })
    },
    deletePost: async (params) => {
        return await doFetch("DELETE", `/community/posts/${params.id}`)
    },
    getPost: async (params) => {
        return await doFetch("GET", `/community/posts/${params.id}`)
    },
    createComment: async (params) => {
        return await doFetch("POST", '/community/comments', { params })
    },
    deleteComment: async (params) => {
        return await doFetch("DELETE", `/community/comments/${params.id}`)
    },
}
export default community;