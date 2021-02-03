import React, { Component } from 'react'

class LearningRoute extends Component {


  render() {
  
    return (

      <section>

        <h2>Translate the word: ----</h2>
        <form>
          <label>What's the translation for this word?</label>
          <input></input>
          <button type='submit'>Submit your answer</button>
        </form> 
        <section>
          Your total score is: ' '
          <div>
            You have answered this word correctly X times.
            You have answered this word incorrectly X times.
          </div>
        </section>

        <section>
          <h2>Incorrect answer: Good try, but not quite right :/</h2>
          <p>The correct translation for 'original' was 'answer' and you chose 'guess'!</p>
          <button>Try another word!</button>
          <div>Your total score is: X</div>
        </section>

        <section>
          <h2>Correct answer: You were correct! :D</h2>
          <p>The correct translation for 'original' was 'answer' and you chose 'guess'!</p>
          <button>Try another word!</button>
          <div>Your total score is: X</div>
        </section>

      </section>
    );
  }
}

export default LearningRoute
