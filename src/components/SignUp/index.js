import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SignUpPage = ({ history }) =>
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
            <Input value={username}
                  onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
                  type="text"
                  placeholder="Full Name"/>
        </FormGroup>
        <FormGroup>
            <Input value={email}
                  onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                  type="text"
                  placeholder="Email Address"/>
        </FormGroup>
        <FormGroup>
            <Input value={passwordOne}
                  onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                  type="password"
                  placeholder="Password"/>
        </FormGroup>
        <FormGroup>
            <Input value={passwordTwo}
                  onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                  type="password"
                  placeholder="Confirm Password"/>
        </FormGroup>
        <Button color="primary" disabled={isInvalid} type="submit">Sign up</Button>

        { error && <p>{error.message}</p> }
      </Form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};