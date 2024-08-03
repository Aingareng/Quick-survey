/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { IAnswer, ISurveyState } from '../repository/Model';

type Action = 
| { type: 'SET_ANSWER'; payload: IAnswer }
| { type: 'SET_CURRENT_QUESTION_INDEX'; payload: number }
| { type: 'SET_TIMER'; payload: number }
| { type: 'RESET_SURVEY' }


const initialState: ISurveyState = {
  currentQuestionIndex: 0,
  answers: [],
  timer: 600,
};

function surveyReducer(state: ISurveyState, action: Action): ISurveyState {
  switch (action.type) {
    case 'SET_ANSWER':
      if (action.payload && 'questionId' in action.payload && 'answer' in action.payload) {
        return { ...state, answers: [...state.answers, action.payload] };
      }
      return state;
    case 'SET_CURRENT_QUESTION_INDEX':
      return { ...state, currentQuestionIndex: action.payload };
    case 'SET_TIMER':
      return { ...state, timer: action.payload };
    case 'RESET_SURVEY':
      return initialState;
    default:
      return state;
  }
}

const SurveyContext = createContext<{
  state: ISurveyState,
  dispatch: React.Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null
});

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
  const storedState = localStorage.getItem('survey-state');
  const initialStateFromStorage = storedState ? JSON.parse(storedState) : initialState;
  const [state, dispatch] = useReducer(surveyReducer, initialStateFromStorage);

  return (
    <SurveyContext.Provider value={{ state, dispatch }}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);

