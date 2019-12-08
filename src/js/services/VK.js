import VKConnectOld from "@vkontakte/vk-connect";
import VKConnect from "@vkontakte/vkui-connect-promise";

import {store} from "../../index";

import {setColorScheme, setAccessToken} from "../store/vk/actions";

const APP_ID = 7239167;
const API_VERSION = '5.92';

export const initApp = () => (dispatch) => {
    const VKConnectOldCallback = (e) => {
        if (e.detail.type === 'VKWebAppUpdateConfig') {
            VKConnectOld.unsubscribe(VKConnectOldCallback);

            dispatch(setColorScheme(e.detail.data.scheme));
        }
    };

    VKConnectOld.subscribe(VKConnectOldCallback);
    VKConnect.send('VKWebAppInit', {});
};

export const getAuthToken = (scope) => (dispatch) => {
    VKConnect.send("VKWebAppGetAuthToken", {
        "app_id": APP_ID,
        "scope": scope.join(',')
    }).then(data => {
        dispatch(setAccessToken(data.data.access_token));
    }).catch(() => {
        dispatch(setAccessToken(null));
    });
};

export const getCommunityAuthToken = (scope, group_id) => {
    return VKConnectOld.sendPromise("VKWebAppGetCommunityAuthToken", {
        "app_id": APP_ID,
        "scope": scope.join(','),
        "group_id": parseInt(group_id)
    }).then(data => {
        return data.access_token || null;
    }).catch(() => {
        return null;
    });
};

export const closeApp = () => {
    VKConnect.send("VKWebAppClose", {"status": "success"});
};

export const swipeBackOn = () => {
    VKConnect.send("VKWebAppEnableSwipeBack", {});
};

export const swipeBackOff = () => {
    VKConnect.send("VKWebAppDisableSwipeBack", {});
};

export const groupsGet = () => {
    return APICall('groups.get', {
        "extended": "1",
        "fields": "description",
        "count": "100"
    });
};

export const APICall = (method, params) => {
    params['access_token'] = store.getState().vkui.accessToken;
    params['v'] = params['v'] === undefined ? API_VERSION : params['v'];

    return VKConnect.send("VKWebAppCallAPIMethod", {
        "method": method,
        "params": params
    }).then(data => {
        return data.data.response;
    }).catch(error => {
        return error;
    });
};
