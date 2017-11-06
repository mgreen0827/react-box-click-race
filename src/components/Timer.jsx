import React, {Component} from 'react';
import {Button, Container} from 'reactstrap';


class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elapsed: 0
    }

  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.props.timer);
  }

  tick() {
    if (this.props.start) {
      this.setState({
        elapsed: new Date() - this.props.start
      });
    }
  }


  render() {
    let elapsed = Math.round(this.props.elapsed / 100);

    let seconds = (elapsed / 10).toFixed(1);
    return (
      <div>
        <Container className="card top10">
          <h1>Time:</h1>
          <b>{seconds} seconds</b>
        </Container>
      </div>
    );

  }
}

export default Timer;