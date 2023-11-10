import React from 'react';

const QuestionList = ({ questions }) => (
  <div className='container'>
    <div className='row'>
      {questions.map((question, index) => (
        <div key={index} className='col-md-4'>
          <div className='card mb-4'>
            <div className='card-body'>
              <h5 className='card-title'>Question {index + 1}</h5>
              <p className='card-text'>Question Text: {question.questionText}</p>
              <p className='card-text'>Exam: {question.exam}</p>
              <p className='card-text'>Question Type: {question.questionType}</p>
              <p className='card-text'>Year: {question.year}</p>
              <p className='card-text'>Subject: {question.subject}</p>
              <ul className='list-group'>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex} className='list-group-item'>
                    {option.questionText} (Correct: {option.correct ? 'Yes' : 'No'})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionList;