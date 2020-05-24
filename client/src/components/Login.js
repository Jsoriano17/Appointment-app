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

class Login extends React.Component {
    state = { email: '', password: '' }

    handleSubmit = (e) => {
        const { email, password, } = this.state;
        this.props.auth.handleLogin({ email, password, }, this.props.history);
    }

    handleChange = (e) => {
        const { name, value, } = e.target;
        this.setState({ [name]: value, });
    }

    render() {
        const { email, password, } = this.state;

        return (
            <>
                <h1>Login</h1>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.handleSubmit}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            autoFocus
                            name='email'
                            value={email}
                            placeholder='Email'
                            onChange={this.handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            name='password'
                            value={password}
                            placeholder='Password'
                            onChange={this.handleChange} />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default class ConnectedLogin extends React.Component {
    render() {
        return (
            <AuthConsumer>
                {auth => <Login {...this.props} auth={auth} />}
            </AuthConsumer>
        )
    }
}
