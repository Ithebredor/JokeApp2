import React from 'react';

import { auth } from '../../firebase';

import { Button } from 'reactstrap';

const SignOutButton = () =>
  <div>
    <Button
      color="danger"
      onClick={auth.doSignOut}
    >
      Sign Out
    </Button>
  </div>

export default SignOutButton;
