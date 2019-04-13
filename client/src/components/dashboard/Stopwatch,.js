import React, {Component} from 'react';
import { Button } from "@material-ui/core";

export default class Stopwatch extends Component {

  state = {
    status: false,
    runningTime: 0
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onTakeMeasurement = () => {
  };

  onResetMeasurement = () => {

  };

  handleClick = () => {
    const { runningTime } = this.state;
    this.setState(state => {
      if (state.status) {
        this.onTakeMeasurement();
        clearInterval(this.timer);
        this.setState({ runningTime: 0, status: false });
      } else {
        const startTime = Date.now() - runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
      }
      return { status: !state.status };
    });
  };

  handleReset = () => {
    this.onResetMeasurement();
    clearInterval(this.timer);
    this.setState({ runningTime: 0, status: false });
  };


  render() {
    const { status, runningTime } = this.state;
    return (
      <div style={{margin: 'auto'}}>
        <p>
            {(runningTime*0.001).toFixed(3)} (sec/s)
        </p>
        <Button
          color = "primary"
          onClick={this.handleClick}
          variant="contained"
        >
          {status ? 'Stop' : 'Start'}
        </Button>
        <Button
          color = "secondary"
          onClick={this.handleReset}
          variant="contained"
        >
          Reset
        </Button>
      </div>
    );
  }
}
