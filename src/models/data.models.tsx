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
interface IQuestionProps{
    questionData:IQuestion
}

export  type {IQOption,IQuestion,IQuestionProps};