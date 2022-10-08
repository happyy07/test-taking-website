
import React from 'react';
import styled from 'styled-components';
const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;
function Option() {
  return (
    <Div >Option</Div>
  );
}

export default Option;
