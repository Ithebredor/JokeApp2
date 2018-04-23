import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <Navbar color="light" light expand="md">
      <NavbarBrand href={routes.LANDING}>JokesApp</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href = {routes.HOME}>Home</NavLink>
        </NavItem>
        <NavItem>  
          <NavLink href={routes.ACCOUNT}>Account</NavLink>
        </NavItem>
      </Nav>
      <SignOutButton />
    </Navbar>
const NavigationNonAuth = () =>
    <Navbar  color="light" light expand="md">
    <NavbarBrand href={routes.LANDING}>JokesApp</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href={routes.LANDING}>Landing</NavLink>
      </NavItem>
      <NavItem>  
        <NavLink href={routes.SIGN_IN}>SignIn</NavLink>
      </NavItem>
    </Nav>
    </Navbar>

export default Navigation;
