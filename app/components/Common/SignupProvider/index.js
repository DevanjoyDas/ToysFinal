/**
 *
 * SignupProvider
 *
 */

import React from 'react';

import { GoogleIcon } from '../Icon';
import { API_URL } from '../../../constants';

const SignupProvider = () => {
  return (
    <a href={`${API_URL}/auth/google`} className='mb-2 google-btn'>
      <GoogleIcon />
      <span className='btn-text text-white'>Continue with Google</span>
    </a>
  );
};

export default SignupProvider;
