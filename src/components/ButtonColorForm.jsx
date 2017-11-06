import React, {Component} from 'react';
import {FormGroup, Label, Input, Container, Row, Col, Button} from 'reactstrap';

class CreateSquare extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="create-square">
        <Container>
          <Row>
            <Col>
              <FormGroup tag="fieldset">
                <legend>Coloures</legend>
                <FormGroup>
                  <Button color="danger" value={this.props.colors[0]}
                          onClick={this.props.addSquare}>{this.props.colors[0]}</Button>
                </FormGroup>
                <FormGroup>
                  <Button color="primary" value={this.props.colors[1]}
                          onClick={this.props.addSquare}>{this.props.colors[1]}</Button>
                </FormGroup>
                <FormGroup>
                  <Button color="success" value={this.props.colors[2]}
                          onClick={this.props.addSquare}>{this.props.colors[2]}</Button>
                </FormGroup>
              </FormGroup>
            </Col>
            {/*<Col>*/}
              {/*<div className={this.state.selectedColor}></div>*/}
            {/*</Col>*/}
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateSquare;

