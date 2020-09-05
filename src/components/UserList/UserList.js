// bad
// компонент UserList является одновременно контейнером и презентационным компонентом
import React from "react";

class UserList extends React.Component {
    constructor() {
        super();
        this.state = { users: [] }
    }

    componentDidMount() {
        fetch("http://test/index.php")
             .then(res => res.json())
            .then(users => this.setState({ users }))
    }

    render() {
        return (
            <ul>
                {this.state.users.map(({ login, name }) => <li key={login}>{login}-{name}</li>)}
            </ul>
        );
    }
}

export default UserList;