import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

function Header() {
  const userLogin = useSelector(state=>state.userLogin)
  const {userInfo} = userLogin
  const dispatch = useDispatch()

  const logoutHandler=()=>{
    dispatch(logout())
  }
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <div className="container-fluid">
        <LinkContainer to="/">
          <Navbar.Brand>Ecommerce Cart</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbarColor01" />
        <Navbar.Collapse id="navbarColor01">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link><i class="fa-solid fa-house"></i></Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
            {userInfo?(
              <NavDropdown title={`welcome ${userInfo.username}`} id="user-dropdown">
              <LinkContainer to="/logout">
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </LinkContainer>
              {/* <LinkContainer to="/register">
                <NavDropdown.Item>Register</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item >Logout</NavDropdown.Item> */}
            </NavDropdown>
            ):(
              <NavDropdown title="New User?" id="user-dropdown">
              <LinkContainer to="/login">
                <NavDropdown.Item>Login</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/register">
                <NavDropdown.Item>Register</NavDropdown.Item>
              </LinkContainer>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item >Logout</NavDropdown.Item> */}
            </NavDropdown>
            )}
            
          </Nav>

          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;