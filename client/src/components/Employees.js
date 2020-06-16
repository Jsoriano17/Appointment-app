import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Employees = (props) => {
    const [employees, setEmployees] = useState([])
    
    const { id } = props
    useEffect(() => {
        axios.get(`/api/hosts/${id}/employees`).then(res => {
            setEmployees(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const renderEmployees = () => {
        return employees.map(employee => (
            <Link to={{pathname: "/employee/page", id: employee.id, hostId: id}} key={employee.id}>
                <span>{employee.first_name} </span>
                <span>{employee.last_name}</span>
                <p>{employee.schedule}</p>
            </Link>
        ))
    }

    return (
        <>
            {renderEmployees()}
        </>
    )
}

export default Employees;