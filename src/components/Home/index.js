import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import JokesList from '../JokesList/JokesList';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }


  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Home</h1>
        <p>Discover new funny jokes</p>
        <JokesList />
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);