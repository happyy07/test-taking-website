
import React from 'react';
import styled from 'styled-components';
import { THEME } from '../../constants/theme.constants';
import { IQOption } from '../../models/data.models';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { activeQuestionSelector, testSelector } from '../../store/test';
const Div = styled.div`
  border: 1px solid #ededed;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
  display: flex;
   /* gap: 0.5rem; */
   align-items: center;
  &:hover {
   background-color: #6ca798;
 }
 &:hover {
  input:not(:checked){
    cursor: pointer;
    border: 2px solid ${THEME.SECONDARY};
    ::after {
      background-color: ${THEME.SECONDARY}
    }
   }
   label{
    cursor: pointer;
    color:${THEME.SECONDARY};
   }
  }
`;

const Radio = styled.input`
 -webkit-appearance: none;
   appearance: none;
   margin: 10px;
   width: 1.7em;
   height: 1.7em;
   border: 1px solid ${THEME.BORDER};
   border-radius: 50%;
   ::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 0.65em;
      height: 0.65em;
      margin: 5px;
   }
   :hover{
    border: 2px solid ${THEME.SECONDARY};
    ::after {
         background-color: ${THEME.SECONDARY}
      }
   }
   :checked {
      border: 2px solid ${THEME.PRIMARY};
      ::after {
         background-color: ${THEME.PRIMARY};
        
      }
      :hover {
         background-color: ${THEME.PRIMARY};
         border: 2px solid ${THEME.SECONDARY};
         ::after {
            background-color: ${THEME.SECONDARY}
         }
      }
   }

`;

const Label = styled.label`
  width:100%;
  text-align: left;
  padding: 10px;
  word-break: break-all;
  display:flex;
  align-items:center;
`
const Span = styled.span`
      height: 100%;
    width: 100%;
    display: block;
`
function QOption(props: IQOption) {
  const activeQuestion = useAppSelector(activeQuestionSelector)
  const test = useAppSelector(testSelector)
  return (
    <div>
      <Div>
        <Label >
          <Radio type="radio" 
          value={props.optionId} 
          name={props.questionId} 
          checked={test.test.questions && test.test.questions[activeQuestion].selectedAnswer === props.optionId} />
          <Span>{props.optionVal}</Span>
        </Label>
      </Div>
    </div>
  );
}

export default QOption;
