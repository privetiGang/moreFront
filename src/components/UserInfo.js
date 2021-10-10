import React, { Component } from 'react';

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            id: ""
        };
        this.props.keycloak.loadUserInfo().then(userInfo => {
            debugger
            this.setState({ role: userInfo.preferred_username })
        });
    }

    render() {
        return (
            <div className="UserInfo">
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>ID: {this.state.id}</p>
                <p>role: {this.state.role}</p>
            </div>
        );
    }
}
export default UserInfo;