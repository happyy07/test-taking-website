
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IQuestion, IRouteParams, ITest, ITestState } from '../../models/data.models';
import QOption from '../QOption/QOption.component';
import Question from './Question.component';
import { getTest } from '../../services/APIService';
import { useDispatch, useSelector } from 'react-redux';
import { loadingSelector, testSelector, setTest, activeQuestionSelector } from '../../store/test';
import { useAppSelector, useAppDispatch } from '../../store/hooks'
const Div = styled.div`

`;
const OptionWrapper = styled.div`
  width:50%;
`;
const QuestionWrapper = styled.div`
  display:flex;
  width:100%;
`;
const QuestionContentWrapper = styled.div`
  text-align:left;
  margin: 10px;
  width:50%;
`;

const QuestionStatement = styled.div`
  text-align:left;
  margin: 10px;
  width:50%;
`;

const QuestionDescription = styled.div`
  text-align:left;
  margin: 10px;
  width:50%;
`;

function QuestionPage() {
  // const [questionData, setQuestionData] = useState<IQuestion>({
  //     questionId: "",
  //     questionText: "",
  //     questionDescription: "",
  //     options: [],
  //     answerOptionId: ""
  // });
  // // const [currentQuestion, setCurrentQuestion] = useState(0)
  // const [testSubmission, setTestSubmission] = useState({})
  // let { testId,question } = useParams();
  // const nextQuestionHandler=()=>{

  // }
  // const handleResponse=(res:any) => {
  //     var cq
  //     if(question){
  //         cq =parseInt(question)

  //     }else{cq=0}
  //     setQuestionData(res.data[0].questions[cq])


  // }
  // useEffect(() => {
  //     // Update the document title using the browser API
  //     getQuestions(testId).then(handleResponse)
  // },[question]);



  let { testId, question } = useParams();


  const dispatch = useAppDispatch()
  const test = useSelector(testSelector)
  const activeQuestion = useSelector(activeQuestionSelector)
  const isLoading = useSelector(loadingSelector)
  // console.log(test.test.questions)
  useEffect(() => {

    getTest(testId).then((res) => {
      if (testId && !isLoading) {
        dispatch(setTest(res.data[0]))

      }
    })

  }, [])
  return (
    <>{test.test && test.test.questions.filter((elm: any, index: number) => index === activeQuestion).map((elm: any) => <Question questionData={elm} />)}

    </>
  );
}

export default QuestionPage;
