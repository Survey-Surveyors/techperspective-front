import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
    className="content-spacer" 
    variant='info'
    style={{ width: '11rem' }}
    onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  )
}

export default LogoutButton;
