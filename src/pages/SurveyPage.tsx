import { Helmet } from "react-helmet";
import ComQuestions from "../components/ComQuestions"
import ComTimer from '../components/ComTimer';

import { useSurvey } from "../contexts/SurveyContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { questions } from "../repository/delivery";



const SurveyPage = () => {
  const { state, dispatch } = useSurvey();
  const navigate = useNavigate()
  const [answerSelect,setAnswerSelect] = useState<{questionId:number,answer:string}>()
  const [disabledButton,setDisabledButton]= useState<boolean>(true)

  const handleAnswer = (answer:string) => {
    const currentQuestion = questions[state.currentQuestionIndex];
    setAnswerSelect({questionId:currentQuestion.id,answer})
    setDisabledButton(false)
  }
  const handleToNextQuestion = () => {
    dispatch({ type: 'SET_ANSWER', payload: answerSelect! });
    const nextQuestionIndex = state.currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      dispatch({ type: 'SET_CURRENT_QUESTION_INDEX', payload: nextQuestionIndex });
    } else {
      navigate('/results');
    }
  }


  useEffect(() => {
    const storedState = localStorage.getItem('survey-state');
    if (storedState) {
      dispatch({ type: 'SET_ANSWER', payload: JSON.parse(storedState)  });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('survey-state', JSON.stringify(state));
  }, [state]);

  useEffect(()=>{
    setDisabledButton(true)
    
  },[state.currentQuestionIndex])

  return (
    <div className="border w-[480px] h-full p-6 rounded-2xl shadow flex flex-col gap-9 items-start">
      <Helmet><title>Survey - Quick Survey</title></Helmet>
      <header>
        <ComTimer />
      </header>      
      <main>
        <ComQuestions 
          question={questions[state.currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      </main>
      <footer>
        <button
           disabled={disabledButton} 
           onClick={handleToNextQuestion} 
           className={
            `
            rounded-2xl bg-purple-700 py-4 px-6 text-white
            ${disabledButton && 'opacity-50 cursor-not-allowed'}
            `
           }
           >
            Berikutnya
          </button>
      </footer>
    </div>
  )
}

export default SurveyPage