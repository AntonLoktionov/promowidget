import axios from 'axios';

const CallAPIAxios = axios.create({
    baseURL: 'https://webhook.site/6fdd0e3e-7159-494f-a6fc-677526319008'
});

const CallAPI = (endpoint, params = {}, method = 'GET') => {
    if (method === 'GET') {
        return CallAPIAxios.get(endpoint, {
            params: params
        }).then(handleAPI);
    } else if (method === 'POST') {
        return CallAPIAxios.post(endpoint, params).then(handleAPI);
    }
};

const handleAPI = (answer) => {
    let response = answer.data;

    if (response.error) {
        return response;
    } else {
        return response.response;
    }
};

export const saveCommunityAuthToken = (group_id, user_id, access_token) => {
    return CallAPI('/', {
        group_id,
        user_id,
        access_token
    });
};
