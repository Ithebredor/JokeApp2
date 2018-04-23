import React, { Component } from 'react';

import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

class JokeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newJokeContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeJoke = this.writeJoke.bind(this);
    }

    handleUserInput(e){
        this.setState({
            newJokeContent: e.target.value,
        })
    }

    writeJoke() {
        this.props.addJoke(this.state.newJokeContent);
        this.setState({
            newJokeContent: '',
        })
    }

    render(){
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Input placeholder="Write some funny joke" 
                                value={this.state.newJokeContent}
                                onChange={this.handleUserInput}/>
                    </FormGroup>
                    <Button onClick = {this.writeJoke}>Add joke</Button>
                </Form>
            </div>
        );
    }
}

export default JokeForm;

