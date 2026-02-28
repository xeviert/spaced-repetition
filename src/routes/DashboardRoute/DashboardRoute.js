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
        return;
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
      <section className='dashboard-section'>
        <h2>Your language: {this.getLanguage()}</h2>

        <div className='dashboard-footer'>
          <div className='total-correct'>
            Total correct answers: {this.getTotalCorrect()}
          </div>
          <Link to='/learn'>
            <button className='start-btn'>Start Practicing</button>
          </Link>
        </div>

        {/* <div className='dashboard-body'>
          <h3>Words to practice</h3>
          <ul>{practiceWords}</ul>
        </div> */}
      </section>
    );
  }
}

export default DashboardRoute;
