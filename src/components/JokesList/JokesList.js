import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as firebase from 'firebase';

import { db } from '../../firebase';
import * as routes from '../../constants/routes';
import Joke from '../Joke/Joke';
import JokeForm from '../JokeForm/JokeForm';

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class JokesList extends Component {
  
  constructor(props) {
    super(props);
    this.addJoke = this.addJoke.bind(this);

    this.database = db.getJokes();

    this.state = {
      jokes: [],
    }
  }

  componentWillMount() {
    const previousJokes = this.state.jokes;

    this.database.on('child_added', snap => {
      previousJokes.push({
        id: snap.key,
        jokeContent: snap.val().jokeContent,
      })

      this.setState({
        jokes: previousJokes
      })
    })
  }

  addJoke(joke){
    this.database.push({ jokeContent: joke});
  }
  
  render() {
    return (
      <div>
        {
          this.state.jokes.map((joke) => {
            return(
              <Joke jokeContent={joke.jokeContent} key={joke.id}/>
            )
          })
        }
        <JokeForm addJoke = {this.addJoke}/>  
      </div>
    );
  }
}

export default JokesList;