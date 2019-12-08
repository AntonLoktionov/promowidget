import React from 'react';
import {Avatar, Snackbar} from "@vkontakte/vkui";

import Icon16Clear from '@vkontakte/icons/dist/16/clear';
import Icon16CheckCircle from '@vkontakte/icons/dist/16/check_circle';

export const SnackbarAlert = (type, message, onClose) => {
    const SnackbarErrorColor = {
        backgroundColor: 'var(--field_error_border)'
    };

    const SnackbarSuccessColor = {
        backgroundColor: 'var(--button_commerce_background)'
    };

    let icon = type === 1 ? <Icon16CheckCircle fill="#fff" width={14} height={14}/> :
        <Icon16Clear fill="#fff" width={14} height={14}/>;

    let color = type === 1 ? SnackbarSuccessColor : SnackbarErrorColor;

    return <Snackbar
        layout="vertical"
        onClose={onClose}
        before={
            <Avatar
                size={24}
                style={color}
            >
                {icon}
            </Avatar>
        }
    >
        {message}
    </Snackbar>;
};
