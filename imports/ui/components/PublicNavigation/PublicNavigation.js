import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';


const PublicNavigation = () => (
  <div>
    <Nav pullLeft>
      <LinkContainer to="/">
        <NavItem eventKey={1} href="/">Home</NavItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavItem eventKey={2} href="/about">About</NavItem>
      </LinkContainer>
      <LinkContainer to="/team">
        <NavItem eventKey={3} href="/team">Team</NavItem>
      </LinkContainer>
      <LinkContainer to="/contact-us">
        <NavItem eventKey={4} href="/contact-us">Contact Us</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <LinkContainer to="/signup">
        <NavItem eventKey={5} href="/signup">Sign Up</NavItem>
      </LinkContainer>
      <LinkContainer to="/login">
        <NavItem eventKey={6} href="/login">Log In</NavItem>
      </LinkContainer>
    </Nav>
  </div>
);

export default PublicNavigation;

