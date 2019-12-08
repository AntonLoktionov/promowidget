import React from 'react';
import {connect} from 'react-redux';

import {Div, Panel, Group, Button, PanelHeader} from "@vkontakte/vkui";
import {closePopout, openPopout} from '../../store/router/actions';

import * as VK from "../../services/VK";
import * as API from "../../services/API";

import {getURLParams} from "../../services/_functions";
import {SnackbarAlert} from "../../services/renderers";

class HomePanelBase extends React.Component {

    state = {
        snackbar: null
    };

    requestAccess = async () => {
        let URLParams = getURLParams();

        if (!URLParams['vk_group_id']) {
            this.setState({
                snackbar:
                    SnackbarAlert(
                        2, "" +
                        "Отройте сервис из под группы",
                        () => this.setState({snackbar: null})
                    )
            });

            return;
        }

        let CommunityAuthToken = await VK.getCommunityAuthToken(['app_widget'], URLParams['vk_group_id']);

        if (!CommunityAuthToken) {
            this.setState({
                snackbar:
                    SnackbarAlert(
                        2, "" +
                        "Предоставьте права приложению",
                        () => this.setState({snackbar: null})
                    )
            });

            return;
        }

        let saveAccessToken = await API.saveCommunityAuthToken(
            URLParams['vk_group_id'],
            URLParams['vk_user_id'],
            CommunityAuthToken
        );

        if (saveAccessToken.error) {
            this.setState({
                snackbar:
                    SnackbarAlert(
                        2, "" +
                        "Возникла ошибка при сохранении токена",
                        () => this.setState({snackbar: null})
                    )
            });
        } else {
            this.setState({
                snackbar:
                    SnackbarAlert(
                        1, "" +
                        "Токен сообщества сохранен",
                        () => this.setState({snackbar: null})
                    )
            });
        }
    };

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>APP</PanelHeader>
                <Group>
                    <Div>
                        <Button size="l" stretched={true} onClick={this.requestAccess}>Запросить доступ</Button>
                    </Div>
                </Group>
                {this.state.snackbar}
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    openPopout,
    closePopout,
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
