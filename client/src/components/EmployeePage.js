import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeePage = (props) => {
    const [employee, setEmployee] = useState({});
    const {id, hostId} = props.location

    useEffect( () => {axios.get(`/api/hosts/${hostId}/employees/${id}`).then(res => {
        setEmployee(res.data)
    }).catch(err => {
        console.log(err)
    })}, [])

return(
    <div>
        <span>{employee.first_name} </span>
        <span>{employee.last_name}</span>
        <p>{employee.schedule}</p>
    </div>
)
}
export default EmployeePage;