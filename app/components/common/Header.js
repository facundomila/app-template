import React from 'react';
import {IndexLink} from 'react-router';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends React.Component {
  render() {

    return (
      <div className="Header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/">{this.props.children.title}</IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem eventKey={1}>Home</NavItem>
              </IndexLinkContainer>

              <LinkContainer to="/vendor">
                <NavItem eventKey={2}>Vendor</NavItem>
              </LinkContainer>

              <LinkContainer to="/owner">
                <NavItem eventKey={3}>Owner</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;