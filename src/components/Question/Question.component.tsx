
import React from 'react';
import styled from 'styled-components';
import QOption from '../QOption/QOption.component';
const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;
function Question() {
  return (
    <>
    <Div >Question</Div>
    <QOption optionId="asd" optionVal='123' questionId="Q1" />
    <QOption optionId="asd21" optionVal='1236' questionId="Q1" />
    <QOption optionId="asdwqad" optionVal='122343' questionId="Q1" />
    
    </>
  );
}

export default Question;
