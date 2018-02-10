import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCanvasPosition } from "./utils/formulas";
import Canvas from "./components/Canvas";

class App extends Component {
  constructor(props) {
    super(props);
    this.trackMouse = this.trackMouse.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.props.moveObjects(this.canvasMousePosition);
    }, 10);
  }

  trackMouse(e) {
    this.canvasMousePosition = getCanvasPosition(e);
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        trackMouse={event => this.trackMouse(event)}
      />
    );
  }
}

App.propTypes = {
  angle:PropTypes.number.isRequired,
  moveObjects:PropTypes.func.isRequired
}

export default App;
