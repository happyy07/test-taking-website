
import React from 'react';
import styled from 'styled-components';
import { THEME } from '../../constants/theme.constants';
import { IQOption, IQuestion, IQuestionProps } from '../../models/data.models';
import QOption from '../QOption/QOption.component';
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { activeQuestionSelector, setActiveQuestion, testSelector, testStartedSelector } from '../../store/test';
import { useAppDispatch } from '../../store/hooks';
import { Link, useNavigate } from 'react-router-dom';

const Div = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 10px 50px ;
  margin:0 0 50px 0;
  background-color:${THEME.SECONDARY};
`;
const Button = styled.button`
width:100px;
height:30px;
      display: flex;
    align-items: center;
    text-align: center;
    background-color:${THEME.PRIMARY};
    border:none;
    cursor: pointer;
    color: ${THEME.SECONDARY};
    justify-content: space-around;
    border-radius:5px;
`
const P = styled.p`
  margin: 0;
`
function Header() {
  let navigate = useNavigate();
  const dispatch = useAppDispatch()
  const testStarted = useSelector(testStartedSelector);
  const test = useSelector(testSelector)
  const activeQuestion = useSelector(activeQuestionSelector)
  const nextHandler = (e: any) => {
    dispatch(setActiveQuestion(activeQuestion + 1))
  }
  const finishHandler = (e: any) => {
    navigate("/result");
  }
  return (
    <>
      <Div>
        <P><Link to={"/"}>KMQ</Link></P>
        {testStarted
          && activeQuestion < test?.test?.questions.length-1
          && <Button onClick={nextHandler}>Next <BsArrowRight size={"1.5em"} color={THEME.SECONDARY} /></Button>}
        {testStarted&&activeQuestion == test?.test?.questions.length-1 
        && <Button onClick={finishHandler}>Finish <BsArrowRight size={"1.5em"} color={THEME.SECONDARY} /></Button>}

      </Div>
    </>
  );
}

export default Header;
