/*
 *
 * Login
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
// import SignupProvider from '../../components/Common/SignupProvider';

class Login extends React.PureComponent {
  render() {
    const {
      authenticated,
      loginFormData,
      loginChange,
      login,
      formErrors,
      isLoading,
      isSubmitting
    } = this.props;

    if (authenticated) return <Redirect to='/dashboard' />;

    const registerLink = () => {
      this.props.history.push('/register');
    };

    const handleSubmit = event => {
      event.preventDefault();
      login();
    };

    return (
      <div className='login-form'>
        {isLoading && <LoadingIndicator />}
        <h2 className='text-white text-center'>Welcome Back! Please Login</h2>
        <form onSubmit={handleSubmit} noValidate >
          <Row className='d-flex justify-content-center align-items-center'>
            <Col
              xs={{ size: 12, order: 2 }}
              md={{ size: 6, order: 1 }}
              className='p-0'
            >
              <Col xs='12' md='12'>
                <Input
                  type={'text'}
                  error={formErrors['email']}
                  label={'Email Address'}
                  name={'email'}
                  placeholder={'Your Email Id'}
                  value={loginFormData.email}
                  onInputChange={(name, value) => {
                    loginChange(name, value);
                  }}
                />
              </Col>
              <Col xs='12' md='12'>
                <Input
                  type={'password'}
                  error={formErrors['password']}
                  label={'Password'}
                  name={'password'}
                  placeholder={'Your Password'}
                  value={loginFormData.password}
                  onInputChange={(name, value) => {
                    loginChange(name, value);
                  }}
                />
              </Col>
              <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between p-3'>
                <Button
                  type='submit'
                  variant='primary'
                  text='Login'
                  disabled={isSubmitting}
                />
                <span className='mt-3 mt-md-0' style={{ cursor: 'pointer', color: 'gold' }} onClick={registerLink}
                >Create Account</span>
              </div>

              {/* <div className='p-2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '18px' }}>

                <SignupProvider />
              </div> */}

            </Col>
          </Row>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated,
    loginFormData: state.login.loginFormData,
    formErrors: state.login.formErrors,
    isLoading: state.login.isLoading,
    isSubmitting: state.login.isSubmitting
  };
};

export default connect(mapStateToProps, actions)(Login);
