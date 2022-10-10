
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { THEME } from '../../constants/theme.constants';
import { IQOption, IQuestion, IQuestionProps } from '../../models/data.models';
import QOption from '../QOption/QOption.component';
const Div = styled.div`

`;
const OptionWrapper = styled.div`
  width:50%;
  margin:5%;
  text-align: left;
`;
const QuestionWrapper = styled.div`
  display:flex;
  width: 80%;
    margin: 0 10%;
  background-color: ${THEME.SECONDARY};
  /* border: 1px; */
`;
const QuestionContentWrapper = styled.div`
  text-align:left;
  margin: 5%;
  width:50%;
`;

const QuestionStatement = styled.div`
  text-align:left;
  margin: 10px;
`;

const QuestionDescription = styled.blockquote`
  text-align:left;
  margin: 20px 10px;
  border-left: 5px solid ${THEME.DARK_BORDER};
  font-style: italic;
  padding: 0.5em 20px;

`;

function Question({ questionData }: IQuestionProps) {
  const [question, setQuestion] = useState(questionData)
  useEffect(() => {
    // Update the document title using the browser API
    setQuestion(questionData)
  }, [questionData]);
  return (
    <>
      {question && <QuestionWrapper>
        <QuestionContentWrapper>
          <QuestionStatement>{question.questionText}</QuestionStatement>
          <QuestionDescription>{question.questionDescription}</QuestionDescription>
        </QuestionContentWrapper>

        <OptionWrapper>
          <p>SELECT ONLY ONE</p>
          {question.options.map((option) => <QOption optionId={option.optionId} optionVal={option.optionVal} questionId={question.questionId} />)}
        </OptionWrapper>
      </QuestionWrapper>
      }

    </>
  );
}

export default Question;
