import React, { Component } from 'react'
import LanguageApiService from '../../services/language-api-service'

class LearningRoute extends Component {

  constructor(props) {
    super(props)
      this.state = {
        showResults: false,
        nextWord: null,
        score: null,
        correctCount: null,
        incorrectCount: null,
        guess: '',
        isCorrect: false,
        translation: '',
        original: '',
      }
  }

  componentDidMount() {
    this.getFirstWord()
  }

  getFirstWord = () => {
    LanguageApiService.getCurrentWord()
      .then(res => {
        this.setState({
          nextWord: res.nextWord,
          score: res.score,
          correctCount: res.correctCount,
          incorrectCount: res.incorrectCount,
        })
      })
  }

  getNextWord = () => {
    LanguageApiService.getCurrentWord()
      .then(res => {
        this.setState({
          nextWord: res.nextWord,
          score: res.score,
          correctCount: res.correctCount,
          incorrectCount: res.incorrectCount,
        })
      })
  }

  handleGuess = (e) => {
    e.preventDefault();

    let guess = e.target["guess-input"].value
    guess = guess.toLowerCase();
    this.setState({
      guess,
    })
    LanguageApiService.handleSubmitGuess(guess).then((data) => {
      this.setState({
        nextWord: data.nextWord,
        score: data.score,
        incorrectCount: data.incorrectCount,
        correctCount: data.correctCount,
        isCorrect: data.isCorrect,
        showResults: true,
        translation: data.translation
      })
    })
  }  

  handleNextWord = () => {
    this.setState({
      showResults: false,
    })
    this.getNextWord();
  }


  showNextWord = () => {
    const { nextWord, incorrectCount, correctCount, score } = this.state

    return (
      <section>

        <div>
            Your total score is: {score}
            <h2>Translate the word:</h2>
            {nextWord}
        </div>

        <form onSubmit={this.handleGuess}>
          <label>What's the translation for this word?</label>
          <input type='text' name="guess-input" required></input>
          <button type='submit'>Submit your answer</button>
        </form> 

        <section>
          <div>
            You have answered this word correctly {correctCount} times.
            You have answered this word incorrectly {incorrectCount} times.
          </div>
        </section>

      </section>
    )
  }

  renderResults = () => {
    let { isCorrect, guess, nextWord, original, translation, score } = this.state;
    return (
        <section>
          {isCorrect ? (

          <div>
            <h2>You were correct! :D</h2>
          </div>

          ) : (

          <div>
            <h2>Good try, but not quite right :/</h2>
          </div>

          )}
            <p>The correct translation for {original} was {translation} and you chose {guess}!</p>
            <div>Your total score is: {score}</div>
            <button onClick={this.handleNextWord}>Try another word!</button>

        </section>
    )
  }

  render() {
    let { showResults } = this.state;
    return (

      <section>
        { showResults ? this.renderResults() : this.showNextWord() }
      </section>
    );
  }
}

export default LearningRoute
