import React from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';
import Dropzone from 'react-dropzone';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export default class HostForm extends React.Component {
    state = { name: '', open: '', closed: '', weekdays: '', phone: '', street_address: '', city: '', state: '', zip: '', country: '', img: '', file: null, }

    handleSubmit = () => {
        let data = new FormData();
        const { file } = this.state
        console.log('file: submit', file)
        data.append("file", file);
        axios.post(`/api/hosts`, data).then((res) => {
            console.log(res);
            this.setState({
                name: '',
                open: '',
                closed: '',
                weekdays: '',
                phone: '',
                street_address: '',
                city: '',
                state: '',
                zip: '',
                country: '',
                img: '',
            });
            return window.location.replace("/user/page")
        })
            .catch((err) => {
                console.log(err);
            });
    };

    handleChange = (e) => {
        const { name, value, } = e.target;
        this.setState({ [name]: value, });
    }

    onDrop = (files) => {
        console.log('files[0]', files[0])
        this.setState({ file: files[0] })
      };


    render() {
        const {
            name,
            open,
            closed,
            weekdays,
            phone,
            street_address,
            city,
            state,
            zip,
            country,
            img } = this.state;
        return (
            <>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.handleSubmit} >

                    <Form.Item label="Host Name" name="name" rules={[{ required: true, message: 'Please input a host name!' }]}>
                        <Input
                            autoFocus
                            name='name'
                            value={name}
                            placeholder='Name'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item label="Opening time" name="open" rules={[{ required: true, message: 'Please input an opening time' }]}>
                        <Input
                            name='open'
                            value={open}
                            placeholder='Open time'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item label="Closing time" name="closed" rules={[{ required: true, message: 'Please input a closing time' }]}>
                        <Input
                            name='closed'
                            value={closed}
                            placeholder='Close time'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item label="Weekdays" name="weekdays" rules={[{ required: true, message: 'Please input weekdays' }]}>
                        <Input
                            name='weekdays'
                            value={weekdays}
                            placeholder='weekdays e.g Monday - Friday'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please input a phone number' }]}>
                        <Input
                            name='phone'
                            value={phone}
                            placeholder='Phone number e.g (123)-123-1234'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item label="Street Address" name="street_address" rules={[{ required: true, message: 'Please input an address' }]}>
                        <Input
                            name='street_address'
                            value={street_address}
                            placeholder='address'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please input a city' }]}>
                        <Input
                            name='city'
                            value={city}
                            placeholder='City'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item label="State" name="state" rules={[{ required: true, message: 'Please select a state' }]}>
                        <Input
                            name='state'
                            value={state}
                            placeholder='State'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item label="Zip" name="zip" rules={[{ required: true, message: 'Please input a zip code' }]}>
                        <Input
                            name='zip'
                            value={zip}
                            placeholder='Zip'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Please input a country' }]}>
                        <Input
                            name='country'
                            value={country}
                            placeholder='Country'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Dropzone onDrop={this.onDrop} multiple={false}>
                        {({ getRootProps, getInputProps }) => (
                            <div>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Drag or drop a picture of your home</p>
                                </div>
                            </div>
                        )}
                    </Dropzone>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}