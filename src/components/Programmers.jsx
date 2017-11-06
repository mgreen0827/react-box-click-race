import React, {Component} from 'react';
import { Button } from 'reactstrap';

class Programmers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.data) {
      return null;
    }
    return (
      <div className={this.props.title}>
        <Button color="danger" >Test Button</Button>
        <ul>{this.props.data}</ul>
      </div>
    );

  }
}

export default Programmers;