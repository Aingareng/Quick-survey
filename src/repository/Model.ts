export interface IQuestion {
  id:number
  question:string
  answer:string[]
}
export interface IAnswer{
  questionId: number
  answer: string
}
export interface ISurveyState {
  currentQuestionIndex: number
  answers: IAnswer[];            
  timer: number
}
