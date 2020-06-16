import React from 'react';
import axios from 'axios';
import { Form, Input, Button} from 'antd';
// import Dropzone from 'react-dropzone';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export default class EmployeeForm extends React.Component {
    state = { first_name: '', last_name: '', schedule: '', }

    handleSubmit = () => {
        // let data = new FormData();
        // const { file } = this.state
        // console.log('file: submit', file)
        // data.append("file", file);
        const { id } = this.props.location
        axios.post(`/api/hosts/${id}/employees`, { ...this.state }).then((res) => {
            console.log(res);
            this.setState({
                first_name: '',
                last_name: '',
                schedule: '',
            });
            return window.location.replace("/host/show")
        })
            .catch((err) => {
                console.log(err);
                alert('Something went wrong please try again later')
                return window.location.replace("/host/show")
            });
    };

    handleChange = (e) => {
        const { name, value, } = e.target;
        this.setState({ [name]: value, });
    }

    // onDrop = (files) => {
    //     console.log('files[0]', files[0])
    //     this.setState({ file: files[0] })
    //   };


    render() {
        const {
            first_name,
            last_name,
            schedule, } = this.state;
        return (
            <>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.handleSubmit} >

                    <Form.Item label="First Name" name="first_name" rules={[{ required: true, message: 'Please input a first name!' }]}>
                        <Input
                            autoFocus
                            name='first_name'
                            value={first_name}
                            placeholder='Fisrt name'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item label="Last Name" name="last_name" rules={[{ required: true, message: 'Please input a last name!' }]}>
                        <Input
                            name='last_name'
                            value={last_name}
                            placeholder='Last name'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item label="Schedule" name="schedule" rules={[{ required: true, message: 'Please input a schedule' }]}>
                        <Input
                            name='schedule'
                            value={schedule}
                            placeholder='Schedule'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    {/* <Dropzone onDrop={this.onDrop} multiple={false}>
                        {({ getRootProps, getInputProps }) => (
                            <div>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Drag or drop a picture of your company</p>
                                </div>
                            </div>
                        )}
                    </Dropzone> */}

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}