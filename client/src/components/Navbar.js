import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, Redirect, } from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends React.Component {

    rightNavItems = () => {
        const { auth: { user, handleLogout, }, location, } = this.props;

        if (user) {
            return (
                <>
                    <StyledNav>
                        <StyledUl>
                            <StyledLi onClick={() => handleLogout(this.props.history)} ><StyledA as={Link} to='/'>Sign out</StyledA></StyledLi>
                        </StyledUl>
                    </StyledNav>
                </>
            )
        } else {
            return (
                <>
                    <Redirect to='/' />
                    <StyledNav>
                        <StyledUl>
                            <StyledLi><StyledA as={Link} to='/register'>Sign up</StyledA></StyledLi>
                            <StyledLi><StyledA as={Link} to='login' >Login</StyledA></StyledLi>
                        </StyledUl>
                    </StyledNav>
                </>
            )
        }
    }

    render() {
        return (
            <div>
                <StyledNav>
                    <StyledA as={Link} to='/'>Logo</StyledA>
                    {this.rightNavItems()}
                </StyledNav>
            </div>
        )
    }
}

export class ConnectedNavbar extends React.Component {
    render() {
        return (
            <AuthConsumer>
                {auth =>
                    <Navbar {...this.props} auth={auth} />
                }
            </AuthConsumer>
        )
    }
}

export default withRouter(ConnectedNavbar);

const StyledNav = styled.nav`
    background: grey;
    display: flex;
    align-items: center;
    padding: 5px;
`

const StyledUl = styled.ul`
    list-style: none;
    text-align: center;
    display: inline;
`

const StyledLi = styled.li`
    display: inline;
    margin: 0px 15px;
`

const StyledA = styled.a`
    color: white;
    text-decoration: none;
    transition: 0.3s all ease-in-out;

    &:hover {
        color: black;
        transition: 0.3s all ease-in-out;
    }
`