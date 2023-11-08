import React, { Component } from 'react';

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
        <div>
          <label>Exam:</label>
          <input type="text" name="exam" value={exam} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Question Type:</label>
          <input type="text" name="questionType" value={questionType} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" name="year" value={year} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Subject:</label>
          <input type="text" name="subject" value={subject} onChange={this.handleInputChange} />
        </div>
        <button onClick={this.handleFilterQuestions}>Filter Questions</button>

        <div>
          {questions.map((question, index) => (
            <div key={index}>
              <p>Question Text: {question.questionText}</p>
              <p>Exam: {question.exam}</p>
              <p>Question Type: {question.questionType}</p>
              <p>Year: {question.year}</p>
              <p>Subject: {question.subject}</p>
              <ul>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    {option.questionText} (Correct: {option.correct ? 'Yes' : 'No'})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default QuestionFilter;