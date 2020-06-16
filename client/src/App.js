import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import UserPage from './components/UserPage';
import styled from 'styled-components';
import HostForm from './components/forms/HostForm';
import HostShow from './components/HostShow';
import EmployeeForm from './components/forms/EmployeeForm';
import EmployeePage from './components/EmployeePage';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/user/page" component={UserPage} />
          <ProtectedRoute exact path="/host/form" component={HostForm} />
          <ProtectedRoute exact path="/host/show" component={HostShow} />
          <ProtectedRoute exact path="/employee/form" component={EmployeeForm} />
          <ProtectedRoute exact path="/employee/page" component={EmployeePage} />
          {/* <ProtectedRoute exact path="/schedule/appointment" component={ScheduleAppointment} /> */}
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;

const Container = styled.div`
margin: 40px;
`


