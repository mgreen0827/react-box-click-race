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
          <ModalHeader toggle={this.toggle}>Your Score</ModalHeader>
          <ModalBody>
            <h4>Your Time: {(this.props.elapsed/1000).toFixed(2)} seconds</h4>
            <h4>Your Accuracy: {this.props.accuracy.toFixed(2) * 100}%</h4>
            <h4>Your Score: {Math.ceil(((this.props.accuracy * 1000)/(this.props.elapsed/1000)))}</h4>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" className="disabled" onClick={this.props.save}>Save Score</Button>
            <Button color="secondary" onClick={this.props.close}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );

  }
}

export default ScoreDialog;