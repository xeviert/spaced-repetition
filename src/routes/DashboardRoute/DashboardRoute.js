import React, { Component } from 'react'

class DashboardRoute extends Component {

  getPracticeWords = () => {
    // this is where the list gets rendered
    // each word shows times user guessed correctly and incorrectly
  }

  render() {
    return (
      <section>
        <h2>Your language: French</h2>


        <h3>Words to practice</h3>

        <ul> {this.getPracticeWords()} </ul>

        Dashboard starts here, above is header.
        implement and style me

        <button>Start Practicing</button>
      </section>
    );
  }
}

export default DashboardRoute
