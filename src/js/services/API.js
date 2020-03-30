import axios from 'axios';

const CallAPIAxios = axios.create({
    //baseURL: 'http://127.0.0.1:8000/api/vkapp/saveWidgetToken'
    //baseURL: 'https://promotestauth.herokuapp.com/api/vkapp/saveWidgetToken'
    baseURL: 'https://webhook.site/1ea520d8-9c0f-4447-9b2c-2a196a12fc98'
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
