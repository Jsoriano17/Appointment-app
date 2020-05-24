import React from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export default class HostForm extends React.Component {
    state = { name: '', open: '', closed: '', weekdays: '', phone: '', street_address: '', city: '', state: '', zip: '', country: '', img: '', }

    handleSubmit = () => {
        const newHost = {...this.state}
        // let data = new FormData();
        // const { file } = this.state
        // console.log('file: submit', file)
        // data.append("file", file);
        // const {
        //   address,
        //   zip_code,
        //   square_footage,
        //   lot_size,
        //   purchase_date,
        //   purchase_price,
        // } = this.state
        console.log(newHost)
        axios.post(`/api/hosts`, newHost).then((res) => {
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
        } )
            .catch((err) => {
                console.log(err);
            });
    };

    handleChange = (e) => {
        const { name, value, } = e.target;
        this.setState({ [name]: value, });
    }


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

                    <Form.Item  label="Host Name" name="name" rules={[{ required: true, message: 'Please input a host name!' }]}>
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

                    <Form.Item label="Img" name="Img" rules={[{ required: true, message: 'Please input a img' }]}>
                        <Input
                            name='img'
                            value={img}
                            placeholder='Img'
                            onChange={this.handleChange}
                        />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}