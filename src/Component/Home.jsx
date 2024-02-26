import { Component } from "react";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="quizapp">Quiz App</h1>
        <button className="play">Play</button>
      </div>
    );
  }
}

export default Home;
