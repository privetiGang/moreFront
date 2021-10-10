import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import Dataset from '../screens/Dataset.screen';

class Secured extends Component {

    constructor(props) {
        super(props);
        this.state = { keycloak: null, authenticated: false };

        // this.props.keycloak.loadUserInfo().then(userInfo => {
        //     this.setState({ name: userInfo.name, email: userInfo.email, id: userInfo.sub })
        // });

    }

    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json');
        keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
            this.setState({ keycloak: keycloak, authenticated: authenticated })
        })
    }

    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated) return (
                <Dataset keycloak={this.state.keycloak} />

            ); else return (<div>Не удалось пройти аутентификацию!</div>)
        }
        return (
            <div>Авторизация</div>
        );
    }
}
export default Secured;