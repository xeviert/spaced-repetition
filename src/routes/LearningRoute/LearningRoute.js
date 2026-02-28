import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';
import '../../styling/learning.css';

class LearningRoute extends Component {
  state = {
    showResults: false,
    correctCount: 0,
    incorrectCount: 0,
    nextWord: '',
    score: 0,
    isCorrect: true,
    original: '',
    translation: '',
    guess: '',
  };

  componentDidMount() {
    this.getFirstWord();
  }

  getFirstWord = () => {
    LanguageApiService.getCurrentWord().then((res) => {
      this.setState({
        nextWord: res.nextWord,
        original: res.nextWord,
        score: res.score,
        incorrectCount: res.incorrectCount,
        correctCount: res.correctCount,
        showResults: false,
      });
    });
  };

  getNextWord = () => {
    LanguageApiService.getCurrentWord().then((res) => {
      this.setState({
        original: res.nextWord,
        incorrectCount: res.incorrectCount,
        correctCount: res.correctCount,
        showNextWord: false,
      });
    });
  };

  handleGuess = (e) => {
    e.preventDefault();

    let guess = e.target['guess-input'].value;
    guess = guess.toLowerCase();
    this.setState({
      guess,
    });
    LanguageApiService.handleSubmitGuess(guess).then((data) => {
      this.setState({
        nextWord: data.nextWord,
        score: data.score,
        incorrectCount: data.incorrectCount,
        correctCount: data.correctCount,
        isCorrect: data.isCorrect,
        showResults: true,
        translation: data.translation,
      });
    });
  };

  handleNextWord = () => {
    this.setState({
      showResults: false,
    });
    this.getNextWord();
  };

  showNextWord = () => {
    const { nextWord, incorrectCount, correctCount, score } = this.state;

    return (
      <section>
        <div className='top-section'>
          <p className='total-score'>Your total score is: {score}</p>
          <div className='translate-title'>Translate the word:</div>
          <span className='current-word-display'>{nextWord}</span>
        </div>

        <div className='form-section'>
          <form onSubmit={this.handleGuess}>
            <label>What's the translation for this word?</label>
            <br />
            <input
              type='text'
              className='learn-guess-input'
              name='guess-input'
              required
            ></input>
            <br />
            <button className='answer-sub-btn' type='submit'>
              Submit your answer
            </button>
          </form>
        </div>

        <section className='bottom-section'>
          <div className='correct-count'>
            You have answered this word correctly {correctCount} times.
            <br />
          </div>
          <div className='incorrect-count'>
            You have answered this word incorrectly {incorrectCount} times.
          </div>
        </section>
      </section>
    );
  };

  renderResults = () => {
    let { isCorrect, guess, original, translation, score } = this.state;
    return (
      <section className='result-page'>
        {isCorrect ? (
          <div>
            <div className='response-title'>You were correct! :D</div>
            <span></span>
          </div>
        ) : (
          <div>
            <div className='response-title'>Good try, but not quite right :/</div>
          </div>
        )}
        <p className='result-response'>
          The correct translation for <i> {original} </i> was {translation} and
          you chose <i>{guess}</i> !
        </p>
        <div className='result-score'>Your total score is: {score}</div>
        <button className='next-word-btn' onClick={this.handleNextWord}>
          Try another word!
        </button>
      </section>
    );
  };

  render() {
    let { showResults } = this.state;
    return (
      <section className='learning-route-body'>
        {showResults ? this.renderResults() : this.showNextWord()}
      </section>
    );
  }
}

export default LearningRoute;
