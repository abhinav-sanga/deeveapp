import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { firebase } from '../firebase';
import * as routes from '../constants/routes';

const adminAuthorization = (authCondition) => (Component) => {
  class AdminAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return this.context.authUser ? <Component /> : null;
    }
  }

  AdminAuthorization.contextTypes = {
    authUser: PropTypes.object,
  };

  return withRouter(AdminAuthorization);
}

export default adminAuthorization;