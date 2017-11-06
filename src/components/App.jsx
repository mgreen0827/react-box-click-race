import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import {Container, Row, Col} from 'reactstrap';

import Header from './Header.jsx';
import CreateSquare from './CreateSquare.jsx';
import RandomSquareGrid from './RandomSquareGrid.jsx';
import Timer from './Timer.jsx';
import ScoreDialog from './ScoreDialog.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      colors: ['Red', 'Blue', 'Green'],
      randomColors: [],
      squares: [],
      elapsed: 0,
      modal: false,
      score: 0,
      accuracy: 0
    };

    this.started = false;
    this.finished = false;
    this.startTime = 0;
    this.squares = [];
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 50);
  }

  tick() {
    if (!this.finished) {
      if (this.startTime > 0) {
        this.setState({
          elapsed: new Date() - this.startTime
        });
      } else {
        this.setState({
          elapsed: 0
        });
      }
    }
  }

  finish() {
    this.finished = true;
    this.setState({
      accuracy: this.calculateAccuracy(),
      modal: true
    });
  }


  calculateAccuracy() {
    let numberCorrect = 0;
    this.state.randomColors.forEach((color, i) => {
      if (color === this.squares[i]) {
        numberCorrect++;
      }
    });
    return numberCorrect / this.state.randomColors.length;
  }

  addSquare(e) {
    if (!this.finished) {
      if (!this.started) {
        this.startTimer();
      }
      this.setState({squares: [...this.state.squares, e.target.value]});
      this.squares = this.squares.concat([e.target.value]);
      console.log(this.squares);

      if (this.squares.length === 9) {
        this.finish();
        return;
      }
    }
  }

  clearSquares() {
    this.squares = [];
    this.finished = false;
    this.setState({modal: false});
  }

  mapSquaresToDivs() {
    return this.squares.map((color, i) =>
      <Col key={i} xs="4">
        <div className={"square-" + color}/>
      </Col>
    );
  }

  resetTime() {
    this.startTime = 0;
    this.started = false;
    this.setState({
      elapsed: 0
    });
  }

  startTimer() {
    this.started = true;
    this.startTime = new Date();
  }

  randomizeColors() {
    this.clearSquares();
    this.started = false;
    this.resetTime();
    let colors = this.state.colors;
    let randomColors = [];
    for (let x = 1; x < 10; x++) {
      randomColors.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    this.setState({
      randomColors: randomColors
    });
  }

  closeModal() {
    this.setState({modal: false});
  }

  saveScore() {
    console.log('save time');
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Timer start={this.start} elapsed={this.state.elapsed}/>
        <Container className="card top10">
          <ScoreDialog elapsed={this.state.elapsed} score={this.state.score} accuracy={this.state.accuracy} className="my-dialog"
                       modal={this.state.modal} save={this.saveScore.bind(this)} close={this.closeModal.bind(this)}/>
          <Row>
            <Col xs="4">
              <CreateSquare className="create-square top10" colors={this.state.colors} addSquare={this.addSquare.bind(this)}/>
            </Col>
            <Col xs="4">
              <RandomSquareGrid randomColors={this.state.randomColors} randomizeColors={this.randomizeColors.bind(this)}></RandomSquareGrid>
            </Col>
            <Col xs="4">
              <Container>
                <Row className="top10">
                  {this.mapSquaresToDivs()}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
