import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Register extends React.Component {
    state = { email: '', password: '', passwordConfirmation: '', first_name: '', last_name: '', };

    handleSubmit = (e) => {
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
                <h1>Sign Up</h1>
                <Form
                    {...layout}
                    onFinish={this.handleSubmit}
                >
                    <Form.Item label="First Name" name="first_name" rules={[{ required: true, message: 'Please input your first name!' }]}>
                        <Input
                            name="first_name"
                            value={first_name}
                            placeholder='First Name'
                            onChange={this.handleChange} />
                    </Form.Item>

                    <Form.Item label="Last Name" name="last_name" rules={[{ required: true, message: 'Please input your last name!' }]}>
                        <Input
                            name="last_name"
                            value={last_name}
                            placeholder='Last Name'
                            onChange={this.handleChange} />
                    </Form.Item>

                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input
                            name="email"
                            value={email}
                            placeholder='Email'
                            onChange={this.handleChange} />
                    </Form.Item>

                    <Form.Item label="Password"  name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password
                            name="password"
                            value={password}
                            placeholder='Password'
                            onChange={this.handleChange} />
                    </Form.Item>

                    <Form.Item label="Password Confirmation" name="passwordConfirmation" rules={[{ required: true, message: 'Passwords do not match!' }]} >
                        <Input.Password
                            name="passwordConfirmation"
                            value={passwordConfirmation}
                            placeholder='Password Confirmation'
                            onChange={this.handleChange} />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type='primary' htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
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
