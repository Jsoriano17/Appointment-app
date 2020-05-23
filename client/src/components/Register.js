import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";

class Register extends React.Component {
    state = { email: '', password: '', passwordConfirmation: '', first_name: '', last_name: '', };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, passwordConfirmation, first_name, last_name } = this.state;
        const { auth: { handleRegister, }, history, } = this.props;

        if (password === passwordConfirmation)
            handleRegister({ email, password, passwordConfirmation, first_name, last_name }, history);
        else
            alert('Passwords Do Not Match!')
    }

    handleChange = (e) => {
        const { name, value, } = e.target;
        this.setState({ [name]: value, });
    }

    render() {
        const { email, password, passwordConfirmation, first_name, last_name } = this.state;

        return (
            <>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        label="First Name"
                        required
                        autoFocus
                        name='first_name'
                        value={first_name}
                        placeholder='First Name'
                        onChange={this.handleChange}
                    />
                    <input
                        label="Last Name"
                        required
                        autoFocus
                        name='last_name'
                        value={last_name}
                        placeholder='Last Name'
                        onChange={this.handleChange}
                    />
                    <input
                        label="Email"
                        required
                        autoFocus
                        name='email'
                        value={email}
                        placeholder='Email'
                        onChange={this.handleChange}
                    />
                    <input
                        label="Password"
                        required
                        name='password'
                        value={password}
                        placeholder='Password'
                        type='password'
                        onChange={this.handleChange}
                    />
                    <input
                        label="Password Confirmation"
                        required
                        name='passwordConfirmation'
                        value={passwordConfirmation}
                        placeholder='Password Confirmation'
                        type='password'
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </>
        )
    }
}

export default class ConnectedRegister extends React.Component {
    render() {
        return (
            <AuthConsumer>
                {auth => <Register {...this.props} auth={auth} />}
            </AuthConsumer>
        )
    }
}
