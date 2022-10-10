
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IQuestion, IRouteParams, ITest, ITestState } from '../../models/data.models';
import QOption from '../QOption/QOption.component';
import Question from './Question.component';
import { getTest } from '../../services/APIService';
import { useDispatch, useSelector } from 'react-redux';
import { loadingSelector, testSelector, setTest, activeQuestionSelector, testStartedSelector, setTestStarted } from '../../store/test';
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


  let { testId, question } = useParams();


  const dispatch = useAppDispatch()
  const test = useSelector(testSelector)
  const activeQuestion = useSelector(activeQuestionSelector)
  const isLoading = useSelector(loadingSelector)
  // const testStarted = useSelector(testStartedSelector)

  useEffect(() => {
    dispatch(setTestStarted(true))
    getTest(testId).then((res) => {
      if (testId && !isLoading) {
        dispatch(setTest(res.data[0]))

      }
    })

  }, [])
  return (
    <>{test.test 
    && test.test.questions
    .filter((elm: any, index: number) => index === activeQuestion)
    .map((elm: any, index: number) => <Question key={index} questionData={elm} />)}

    </>
  );
}

export default QuestionPage;
