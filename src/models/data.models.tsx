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
    questionData:IQuestion|null
}

interface IRouteParams{
    questionId:string,
    testId:string
}
interface ITestState{
    test: ITest|null,
    testIds:string[],
    loading:boolean,
    activeQuestion:number
}
export  type {IQOption,IQuestion,IQuestionProps,IRouteParams,ITest,ITestState};