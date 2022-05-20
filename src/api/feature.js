import { doFetch } from "./axios";

const feature = {
    getFoodInfo: async (params) => {
        return await doFetch("GET", `/feature/foods/${params.id}`)
    },
}

export default feature;