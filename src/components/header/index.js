import * as React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Nav, NavItem, Navbar } from 'reactstrap'

class Header extends React.Component {
    render() {
        const routes = ['resume']
        return(
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Nav>
                    <NavItem className='navitem'>
                        <Link to='/'>Home</Link>
                    </NavItem>
                {routes.map(route =>
                    <NavItem>
                        <Link to={route}>{route}</Link>
                    </NavItem>)}
                </Nav>
            </Navbar>
        )
        
    }
}

export default Header