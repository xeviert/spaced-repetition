import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LanguageApiService from '../../services/language-api-service';
import '../../styling/dashboard.css';

class DashboardRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      practiceWords: '',
    };
  }

  componentDidMount() {
    LanguageApiService.getLanguageAndWords().then((data) => {
      if (data === undefined) {
        this.props.history.push('/login');
      } else
        this.setState({
          language: data.language,
        });
      this.renderWords(data.words);
    });
  }

  renderWords = (words) => {
    let practiceWords = words.map((word) => {
      return (
        <li key={word.id}>
          <h4>{word.original}</h4>
          <p className='answer-count'>
            correct answer count: {word.correct_count}
          </p>
          <p className='answer-count'>
            incorrect answer count: {word.incorrect_count}
          </p>
        </li>
      );
    });
    this.setState({
      practiceWords,
    });
  };

  getLanguage = () => {
    return this.state.language == null ? null : this.state.language.name;
  };

  getTotalCorrect = () => {
    return this.state.language == null ? null : this.state.language.total_score;
  };

  render() {
    const { practiceWords } = this.state;

    return (
      <section>
        <h2>Your language: {this.getLanguage()}</h2>

        <div id='dashboard-body'>
          <h3>Words to practice</h3>
          <ul>{practiceWords}</ul>
        </div>

        <div id='dashboard-footer'>
          <div id='total-correct'>
            Total correct answers: {this.getTotalCorrect()}
          </div>
          <Link to='/learn'>
            <button id='start-btn'>Start Practicing</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default DashboardRoute;
