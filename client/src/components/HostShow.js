import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import Employees from './Employees';

const HostShow = (props) => {
    const [host, setHost] = useState({})
    const { id } = props.location
    useEffect(() => {
        axios.get(`/api/hosts/${id}`).then(res => {
            setHost(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <img src={host.img} width="" height="200px" />
            <Employees id={id}/>
            <Link to={{pathname: "/employee/form", id: id}}>Employee form</Link>
        </div>
    )
}

export default HostShow;