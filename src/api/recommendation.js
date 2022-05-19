import { doFetch } from "./axios";

const recommendation = {
    getRandomMenu: async () => {
        return await doFetch("GET", '/recommendation/random')
    },
    getPopularMenu: async () => {
        return await doFetch("GET", '/recommendation/yesterday-popular')
    },
    getUserInterestMenu: async () => {
        return await doFetch("GET", '/recommendation/interest-user')
    },
    getPopularInterestMenu: async () => {
        return await doFetch("GET", '/recommendation/interest-popular')
    },
}

export default recommendation;