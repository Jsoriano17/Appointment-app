import React from 'react';
import { Link } from 'react-router-dom';
import RenderHosts from './RenderHosts';

const UserPage = () => (
    <>
        <div>this is the user page</div>
        <RenderHosts/>
        <Link to='/host/form'>host form</Link>
    </>
)

export default UserPage;