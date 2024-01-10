import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const SignUpButton = ({ isSubmitting }) => {
  return (
    <Button
      component={RouterLink}
      to="/signup"
      size="large"
      type="submit"
      variant="contained"
      disabled={isSubmitting}
      style={{ marginBottom: '20px' }}
    >
      {isSubmitting ? 'Loading...' : 'Sign Up'}
    </Button>
  );
};

export default SignUpButton;
