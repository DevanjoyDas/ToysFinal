/**
 *
 * ResetPasswordForm
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../Input';
import Button from '../Button';

const ResetPasswordForm = props => {
  const {
    resetFormData,
    formErrors,
    isToken,
    resetPasswordChange,
    resetPassword
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    resetPassword();
  };

  return (
    <div className='reset-password-form' style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12' lg='12'>
            <Input
              type={'password'}
              error={formErrors['password']}
              label={'Password'}
              name={'password'}
              placeholder={isToken ? 'Password' : 'Old Password'}
              value={resetFormData.password}
              onInputChange={(name, value) => {
                resetPasswordChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='12'>
            <Input
              type={'password'}
              error={formErrors['confirmPassword']}
              label={'New Password'}
              name={'confirmPassword'}
              placeholder={'New Password'}
              value={resetFormData.confirmPassword}
              onInputChange={(name, value) => {
                resetPasswordChange(name, value);
              }}
            />
          </Col>
        </Row>
        {/* <hr /> */}
        <div className='reset-actions mt-2'>
          <Button type='submit' variant='primary' text='Update Password' />
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
