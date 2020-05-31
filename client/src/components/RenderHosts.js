import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RenderHosts = () => {
    const [hosts, setHosts] = useState([])

    useEffect(() => {
        axios.get(`/api/hosts`).then(res => {
            setHosts(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const renderHosts = () => {
        return hosts.map(host => (
            <div key={`${host.id}`}>
                <Link to={{pathname: '/host/show', id: host.id}}>
                    <img src={host.img} width="" height="200px" />
                </Link>
            </div>
        ))
    }

    return (
        <>
            {renderHosts()}
        </>
    )
}

export default RenderHosts;