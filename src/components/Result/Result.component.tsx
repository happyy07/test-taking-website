
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IQuestion } from '../../models/data.models';
import { useAppDispatch } from '../../store/hooks';
import { setTestStarted, testSelector } from '../../store/test';

const Div = styled.div`
  /* margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 } */
`;
function Result() {
  const dispatch = useAppDispatch()
  const test = useSelector(testSelector)
  dispatch(setTestStarted(false))
  let navigate = useNavigate();
  let totalQuestions =0
  let correctAnswers = 0
  if(test.test){
    totalQuestions=test.test.questions.length
    for (let index = 0; index < test.test.questions.length; index++) {
      const element: IQuestion = test.test.questions[index];
      if (element.answerOptionId === element.selectedAnswer) {
        correctAnswers++
      }
    }
  }else{
    navigate('/')
  }

  return (
    <>
    {test.test?<Div>Congratulations You have scored : <b>{correctAnswers*100 / totalQuestions}%</b></Div>:<></>}
    </>
    
    
  );
}

export default Result;
