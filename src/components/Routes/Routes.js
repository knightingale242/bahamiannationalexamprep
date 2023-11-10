import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyForm from '../newQuestions/newQuestions';
import QuestionFilter from '../questionFilter/questionFilter';

function Routing() {
    return (
      <Router>
        <Routes>
            <Route path="/new-question" element={<MyForm />} />
            <Route path="/filter-questions" element={<QuestionFilter/>} />
            <Route path="/admin-console" element={
                                                  <div className='row'>
                                                    <div className='col-md-6'><MyForm /></div>
                                                    <div className='col-md-6'><QuestionFilter /></div>
                                                  </div>          
                                                  } />
        </Routes>
      </Router>
    );
  }
  
  export default Routing;