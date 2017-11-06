import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';


class RandomSquareGrid extends Component {
  constructor(props) {
    super(props);

    this.props.randomizeColors();
  }

  // randomizeColors() {
  //   this.props.clearSquares();
  //   this.props.restart();
  //   let colors = this.state.colors;
  //   let randomColors = [];
  //   for (let x = 1; x < 10; x++) {
  //     randomColors.push(colors[Math.floor(Math.random() * colors.length)]);
  //   }
  //   this.setState({
  //     randomColors: randomColors
  //   });
  // }

  createGrid() {
    if (this.props.randomColors) {
      let randomColors = this.props.randomColors;
      return randomColors.map((randomColor, i) => <Col key={i} xs="4">
        <div className={"square-" + randomColor}/>
      </Col>);
    }
    return;
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="top10">
            {this.createGrid()}
          </Row>
        </Container>
        <Button className="bottom10 top10" color="warning" onClick={this.props.randomizeColors}>Reset!</Button>
      </div>
    );

  }
}

export default RandomSquareGrid;