import { Component } from "react";

class UpdatedQuiz extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="containerNew">
          <h1 className="questionHeader">Question</h1>
          <p>1 of 15</p>
          <p className="questionText">Which is the only mammal that can jump?</p>
          <div className="optionContainer">
            <div className="quizOption">
              <p>Dog</p>
            </div>
            <div className="quizOption">
              <p>Elephant</p>
            </div>
            <div className="quizOption">
              <p>Goat</p>
            </div>
            <div className="quizOption">
              <p>Lion</p>
            </div>
          </div>

          <div className="buttonContainer">
            <button className="prevButton">Previous</button>
            <button className="nextButton">Next</button>
            <button className="quitButton">Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdatedQuiz;
