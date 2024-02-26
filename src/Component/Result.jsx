import { Component } from "react";

class Result extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <p className="result">Result</p>
        <div className="main">
          <p className="practice">You need more practice!</p>
          <h1 className="blue">Your score is 20%</h1>
          <div className="flex">
            <p>Total number of questions</p>
            <p>15</p>
          </div>
          <div className="flex">
            <p>Number of attempted questions</p>
            <p>9</p>
          </div>
          <div className="flex">
            <p>Number of correct answers</p>
            <p>3</p>
          </div>
          <div className="flex">
            <p>Number of wrong answers</p>
            <p>6</p>
          </div>
        </div>

        <div className="resultbutton">
          <button className="playagain">Play Again</button>
          <button className="backhome">Back to home</button>
        </div>
      </div>
    );
  }
}

export default Result;
