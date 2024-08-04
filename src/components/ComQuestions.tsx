import React, { useEffect, useState } from "react";
import { IQuestion } from "../repository/Model";
import { useSurvey } from "../contexts/SurveyContext";

interface QuestionProps {
  question: IQuestion;
  onAnswer: (answer: string) => void;
}

const ComQuestions: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const { state } = useSurvey();

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [chosenIsAnswer, setIsChosenAnswer] = useState<boolean>(true);
  

  const handleAnswerClick = (answer: string, index: number) => {
    setSelectedAnswerIndex(index);
    onAnswer(answer);
    setIsChosenAnswer(true)
  };

  useEffect(()=>{
    setIsChosenAnswer(false)
    
  },[state.currentQuestionIndex])


  return (
    <div className="flex flex-col gap-5 items-start">
      <h2 className="">{question.question}</h2>
      <ul className="text-left flex flex-col gap-2">
        {question.answer.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(answer, index)}
            className={`cursor-pointer p-1 rounded-md border ${
              selectedAnswerIndex === index && chosenIsAnswer
                ? "border-purple-700"
                : "border-purple-100"
            } hover:border-purple-700 focus:border-purple-700`}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComQuestions;
