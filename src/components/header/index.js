import * as React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'

class Header extends React.Component {
    render() {
        const routes = ['food', 'exercise', 'resume']
        return(
            <Navbar>
                <NavbarBrand href='/' style={{ marginLeft: '10px' }}>{this.props.name}</NavbarBrand>
                <Nav className='ml-auto' navbar>
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