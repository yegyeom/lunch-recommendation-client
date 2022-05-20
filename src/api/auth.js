import { doFetch } from './axios';

const auth = {
    signUp: async (params) => {
        return await doFetch('POST', '/account/users', { params })
    },
    interest: async (params) => {
        return await doFetch('POST', '/account/user/interest', { params })
    },
    login: async (params) => {
        return await doFetch('POST', '/auth/token', { params })
    },
    user: async () => {
        return await doFetch('GET', '/account/user')
    },
    addLikeFood: async (params) => {
        return await doFetch('PUT', `/account/user/likes/${params.id}`)
    },
    getLikeFood: async (params) => {
        return await doFetch('GET', `/account/users/${params.id}/likes`)
    },
    addHistory: async (params) => {
        return await doFetch('POST', '/account/user/histories', { params})
    },
    getHistory: async () => {
        return await doFetch('GET', '/account/user/histories')
    }
}

export default auth;