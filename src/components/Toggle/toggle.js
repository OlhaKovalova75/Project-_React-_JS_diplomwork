import { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={(event) => this.handleClick(event)}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;

// ReactDOM.render(<Toggle />, document.getElementById("root"));
