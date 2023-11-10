import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import "./newQuestions.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const apiEndpoint = "http://localhost:8080/api/v1/question/new"

function MyForm() {
  const [formData, setFormData] = useState({
    questionText: '',
    exam: '',
    questionType: '',
    year: null,
    subject: '',
    options: [
      { questionText: '', correct: false },
      { questionText: '', correct: false },
      { questionText: '', correct: false },
      { questionText: '', correct: false },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'options') {
      const index = parseInt(e.target.dataset.index, 10);
      const newOptions = [...formData.options];
      newOptions[index].questionText = value;
      setFormData({ ...formData, options: newOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCorrectOptionChange = (e) => {
    const index = parseInt(e.target.dataset.index, 10);
    const newOptions = formData.options.map((option, i) => ({
      questionText: option.questionText,
      correct: i === index,
    }));
    setFormData({ ...formData, options: newOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data as a POST request to the API endpoint
      await axios.post(apiEndpoint, formData);
      alert('Form data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
      <form>
        <h1>New Question Form</h1>

        <label class="form-label">Subject</label>
        <input class="form-control" list="datalistOptions" name="subject" placeholder="Type to search for a subject..." onChange={handleChange}/>
        <datalist id="datalistOptions">
          <option value="Biology"/>
          <option value="Mathematics"/>
          <option value="Geography"/>
          <option value="Chemistry"/>
          <option value="Combined Science"/>
        </datalist>

        <label class="form-label">Exam</label>
        <input type="text" class="form-control form-control-lg" name="exam" onChange={handleChange}/>

        <label class="form-label">Year</label>
        <input type="number" class="form-control form-control-lg" name="year" onChange={handleChange}/>

        <label class="form-label">Question Type</label>
        <input type="text" class="form-control form-control-lg" name="questionType" onChange={handleChange}/>

        <label class="form-label">Question Prompt</label>
        <textarea type="text" class="form-control form-control-lg" name="questionText" rows={4} width='100vw' onChange={handleChange}/>

        {formData.options.map((option, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
            <textarea
              placeholder={"Option" + (index + 1)}
              name="options"
              data-index={index}
              value={option.questionText}
              onChange={handleChange}
              width='100vw'
              cols={200}
              rows={4}
            />
            <div class='col-md-1'>
              <input
                type="checkbox"
                name="correctOption"
                data-index={index}
                checked={option.correct}
                onChange={handleCorrectOptionChange}
              />
              </div>
            </div>
          ))}
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit Question</button>
      </form>
  );
}

export default MyForm;