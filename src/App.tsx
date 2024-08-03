// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SurveyPage from './pages/SurveyPage';
import ResultsPage from './pages/ResultsPage';
import Default from './layout/Default';
import { SurveyProvider } from './contexts/SurveyContext';

function App() {

  return (
    <SurveyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<Home />} />
            <Route path="/survey" element={<SurveyPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Route>
        </Routes>
      </Router>
    </SurveyProvider>    
  )
}

export default App
