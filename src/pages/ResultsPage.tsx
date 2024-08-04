import { useSurvey } from '../contexts/SurveyContext';
import { useNavigate } from 'react-router-dom';

const ResultsPage = () => {
  const { state, dispatch } = useSurvey();
  const navigate = useNavigate();

  const restartSurvey = () => {
    dispatch({ type: 'RESET_SURVEY' });
    localStorage.removeItem('survey-state');
    navigate('/');
  };

  return (
    <div>
    <h1>Survey Results</h1>
    <ul className='mt-5'>
      {state.answers.map((answer,idx) => (
        <li key={idx} className='grid grid-cols-2 justify-items-start'>
          <p>Question {idx + 1}:</p> 
          <p>{answer.answer}</p>
        </li>
      ))}
    </ul>
    <button className='float-left mt-5' onClick={restartSurvey}>Restart Survey</button>
  </div>
  )
}

export default ResultsPage