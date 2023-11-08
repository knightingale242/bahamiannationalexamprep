import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Define styled components for your form elements
const Container = styled.div`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px #007bff;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function MyForm() {
  const [formData, setFormData] = useState({
    questionText: '',
    exam: '',
    questionType: '',
    year: 0,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data as a POST request to the API endpoint
      await axios.post('YOUR_API_ENDPOINT', formData);
      alert('Form data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <Container>
      <h1>Biology Question Form</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="questionText">Question Text</Label>
        <Input
          type="text"
          name="questionText"
          value={formData.questionText}
          onChange={handleChange}
        />
        <Label htmlFor="exam">Exam</Label>
        <Input
          type="text"
          name="exam"
          value={formData.exam}
          onChange={handleChange}
        />
        <Label htmlFor="questionType">Question Type</Label>
        <Input
          type="text"
          name="questionType"
          value={formData.questionType}
          onChange={handleChange}
        />
        <Label htmlFor="year">Year</Label>
        <Input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
        <Label htmlFor="subject">Subject</Label>
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <h3>Options</h3>
        {formData.options.map((option, index) => (
          <div key={index}>
            <Label htmlFor={`option-${index}`}>Option {index + 1}</Label>
            <Input
              type="text"
              name="options"
              data-index={index}
              value={option.questionText}
              onChange={handleChange}
            />
          </div>
        ))}
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
}

export default MyForm;