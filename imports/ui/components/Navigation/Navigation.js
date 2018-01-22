import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import PublicNavigation from '../PublicNavigation/PublicNavigation';
import AuthenticatedNavigation from '../AuthenticatedNavigation/AuthenticatedNavigation';

import './Navigation.scss';

const Navigation = props => (
  <Navbar className="navbar-custom navbar-fixed-top navbar-inverse" role="navigation">
    <div className="container">
      <Navbar.Header>
        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button><a className="navbar-brand" href="/">Art Gallery</a>
      </Navbar.Header>
      <Navbar.Collapse id="custom-collapse">
        {!props.authenticated ? <PublicNavigation /> : <AuthenticatedNavigation {...props} />}
      </Navbar.Collapse>
    </div>
  </Navbar>
);

Navigation.defaultProps = {
  name: '',
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default Navigation;
