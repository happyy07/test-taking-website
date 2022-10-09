interface IQOption {
    questionId: string;
    optionId: string,
    optionVal: string,
}
interface IQuestion {
    questionId: string;
    questionText:string,
    questionDescription:string,
    options:IQOption[],
    answerOptionId:string
}
interface ITest{
    id:string,
    questions:IQuestion[]
}
interface IQuestionProps{
    questionData:IQuestion
}

interface IRouteParams{
    questionId:string,
    testId:string
}
export  type {IQOption,IQuestion,IQuestionProps,IRouteParams,ITest};