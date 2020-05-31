import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HostShow = (props) => {
    const [host, setHost] = useState([])

    useEffect(() => {
        const { id } = props.location
        axios.get(`/api/hosts/${id}`).then(res => {
            setHost(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <img src={host.img}/>
        </div>
    )
}

export default HostShow;