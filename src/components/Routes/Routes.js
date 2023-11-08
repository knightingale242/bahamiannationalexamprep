import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyForm from '../newQuestions/newQuestions';
import QuestionFilter from '../questionFilter/questionFilter';

function Routing() {
    return (
      <Router>
        <Routes>
            <Route path="/new-question" element={<MyForm />} />
            <Route path="/filter-questions" element={<QuestionFilter />} />
        </Routes>
      </Router>
    );
  }
  
  export default Routing;