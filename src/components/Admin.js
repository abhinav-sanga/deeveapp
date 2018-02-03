import React from 'react';
import PropTypes from 'prop-types';

import adminAuthorization from './adminAuthorization';

const AdminPage = (props, { authUser }) =>
  <div>
    <h1>Admin</h1>
    <p>Restricted area! Only users with the admin rule are authorized.</p>
  </div>

AdminPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser && authUser.email === 'abhinava.srirajan@gmail.com';

export default adminAuthorization(authCondition)(AdminPage);

