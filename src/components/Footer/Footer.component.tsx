
import React from 'react';
import styled from 'styled-components';
import { THEME } from '../../constants/theme.constants';
import { IQOption, IQuestion, IQuestionProps } from '../../models/data.models';
import QOption from '../QOption/QOption.component';
import { BsFillChatTextFill } from "react-icons/bs";
const Div = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-top: 1px solid ${THEME.DARK_BORDER} ;
  background-color:${THEME.BACKGROUND};
`;
const Button=styled.button`
width:4em;
height:4em;
position:absolute;
right: 0;
padding:1em;
      display: flex;
    align-items: center;
    text-align: center;
    background-color:${THEME.PRIMARY};
    border:none;
    cursor: pointer;
    color: ${THEME.SECONDARY};
    justify-content: space-around;
    border-radius:100%;
`
function Footer() {
  return (
    <>
      <Div>
        <Button><BsFillChatTextFill size={"3em"}/></Button>
      </Div>
    </>
  );
}

export default Footer;
