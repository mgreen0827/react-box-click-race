import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


class ScoreDialog extends Component {
  constructor(props) {
    super(props);


  }


  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <h4>Your Time: {this.props.elapsed.toFixed(2)}</h4>
            <h4>Your Accuracy: {this.props.accuracy.toFixed(2)}</h4>
            <h4>Your Score: {(this.props.elapsed * this.props.accuracy).toFixed(2)}</h4>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.saveTime}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.props.close}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );

  }
}

export default ScoreDialog;