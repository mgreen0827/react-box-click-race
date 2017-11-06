import React, {Component} from 'react';
import {Button} from 'reactstrap';

import ButtonColorForm from './ButtonColorForm.jsx';

class CreateSquare extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ButtonColorForm colors={this.props.colors} addSquare={this.props.addSquare}></ButtonColorForm>
      </div>
    );

  }
}

export default CreateSquare;