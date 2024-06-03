import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formMinutes: this.props.minutes,
      formSeconds: this.props.seconds,
      showAlert: false,
    };
    this.minutesKeyPress = this.minutesKeyPress.bind(this);
    this.secondsKeyPress = this.secondsKeyPress.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  minutesKeyPress(event) {
    if (this.state.showAlert) this.setState({ showAlert: false });
    if (this.state.formMinutes < 10) {
      this.setState({ formMinutes: "0" + event.target.value });
    }

    if (event.target.value.length <= 2) {
      this.setState({ formMinutes: event.target.value });
    }
  }

  secondsKeyPress(event) {
    if (this.state.showAlert) this.setState({ showAlert: false });
    // if (this.state.formSeconds < 10) {
    //   this.setState({ formSeconds: "0" + event.target.value });
    // }

    if (event.target.value.length <= 2 && event.target.value < 60) {
      this.setState({ formSeconds: event.target.value });
    }
  }

  startTimer() {
    if (this.state.formMinutes > 0 || this.state.formSeconds > 0) {
      this.props.setShowCountdown(true);
      this.props.setMinutes(this.state.formMinutes);
      this.props.setSeconds(this.state.formSeconds);
    } else {
      this.setState({ showAlert: true });
    }
  }

  render() {
    return (
      <div className="formContainer">
        <div>
          <input
            type="number"
            min={0}
            max={99}
            placeholder="00"
            onChange={this.minutesKeyPress}
            value={this.state.formMinutes}
          />
          <span className="colon">{" : "}</span>
          <input
            type="number"
            min={0}
            max={59}
            placeholder="00"
            onChange={this.secondsKeyPress}
            value={this.state.formSeconds}
          />

          {this.state.showAlert && <div className="redText">Please Input</div>}
        </div>
        <div>
          <button onClick={this.startTimer}>Start Counting</button>
        </div>
      </div>
    );
  }
}

export default Form;
