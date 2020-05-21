import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {

    rightNavItems = () => {
        const { auth: { user, handleLogout, }, location, } = this.props;

        if (user) {
            return (
                <nav>
                    <ul>
                        <li onClick={() => handleLogout(this.props.history)} ><Link to='/'>Log Out</Link></li>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav>
                    <ul>
                        <li><Link to='login' >Login</Link></li>
                    </ul>
                    <li><Link to='/register'>Register</Link></li>
                </nav>
            )
        }
    }

    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    {this.rightNavItems()}
                </nav>
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
