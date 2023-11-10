import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionList from '../QuestionList.js/QuestionList';

class QuestionFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam: null,
      questionType: null,
      year: null,
      subject: null,
      questions: [],
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFilterQuestions = () => {
    // Send a request to the API endpoint with the filter criteria
    const { exam, questionType, year, subject } = this.state;

    // ... (Rest of the fetch code)

    // Make sure to replace apiUrl with the actual URL of your API endpoint
    const apiUrl = 'http://localhost:8080/api/v1/question';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        exam,
        questionType,
        year,
        subject,
      }),
    })
      .then((response) => response.json())
      .then((data) => this.setState({ questions: data }))
      .catch((error) => console.error('Error fetching data:', error));
  };

  render() {
    const { exam, questionType, year, subject, questions } = this.state;

    return (
      <div>
        <div class='col-md-12' style={{ display: 'flex', alignItems: 'center', marginLeft: '5px', marginBottom: '20px' }}>
        <div class='col-md-3'>
          <label>Exam:</label>
          <input type="text" name="exam" value={exam} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Question Type:</label>
          <input type="text" name="questionType" value={questionType} onChange={this.handleInputChange} />
        </div>
        <div class='col-md-3'>
          <label>Year:</label>
          <input type="number" name="year" value={year} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Subject:</label>
          <input type="text" name="subject" value={subject} onChange={this.handleInputChange} />
        </div>
        <button onClick={this.handleFilterQuestions}>Filter Questions</button>
        </div>

        <QuestionList questions={questions} />
      </div>
    );
  }
}

export default QuestionFilter;