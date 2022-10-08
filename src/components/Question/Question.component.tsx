
import React from 'react';
import styled from 'styled-components';
import { IQuestion } from '../../models/data.models';
import QOption from '../QOption/QOption.component';
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

function Question(prop: IQuestion) {
  return (
    <>
      <Div>Question</Div>
      <QuestionWrapper>
        <QuestionContentWrapper>
          <QuestionStatement>{prop.questionText}</QuestionStatement>
          <QuestionDescription>{prop.questionDescription}</QuestionDescription>
        </QuestionContentWrapper>

        <OptionWrapper>
          {prop.options.map(option => <QOption optionId={option.optionId} optionVal={option.optionVal} questionId={option.questionId} />)}
        </OptionWrapper>
      </QuestionWrapper>


    </>
  );
}

export default Question;
