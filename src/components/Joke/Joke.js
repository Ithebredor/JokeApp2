import React, { Component } from 'react';
import { db } from '../../firebase';
import propTypes from 'prop-types'

import {
  Card, CardText, CardTitle, CardBody } from 'reactstrap';

class Joke extends Component {

    constructor(props) {
      super(props);
      this.jokeContent = props.jokeContent;
      this.jokeId = props.jokeId;
    }
    
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardText>{this.jokeContent}</CardText>
          </CardBody>
        </Card>  
      </div>
    );
  }
}

Joke.propTypes = {
  jokeContent: propTypes.string
}

export default Joke;
