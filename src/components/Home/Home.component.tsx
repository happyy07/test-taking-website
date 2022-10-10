
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { THEME } from '../../constants/theme.constants';
import { getAllTests, getTest } from '../../services/APIService';
import { useAppDispatch } from '../../store/hooks';
import { setActiveQuestion, setTestIds, setTestStarted, testIdselector, testSelector } from '../../store/test';
const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;
function Home(props: any) {
  const dispatch = useAppDispatch()
  const testIds = useSelector(testIdselector)
  dispatch(setActiveQuestion(0))
  dispatch(setTestStarted(false))
  useEffect(() => {
    getAllTests().then((res) => {
      dispatch(setTestIds(res.data.testIds))
    })

  }, [])
  const P = styled.p`
  `
  const Div = styled.div`
  margin:auto;
  display: flex;
  justify-content: space-between;
  max-width:250px;
  background-color: ${THEME.SECONDARY};
  padding:10px;
  border-radius: 10px;
  margin:10px auto; 
  `
  const Button = styled.button`
    background-color: ${THEME.PRIMARY};
    color:${THEME.SECONDARY};
    padding:5px 10px;
    border:none;
    border-radius: 5px;
    cursor:pointer;
    :hover{
      outline :1px solid ${THEME.DARK_BORDER};
    }

  `
  return (
    <div style={{ margin: "100px" }}>
      <P>Select Any of the following tests to get started</P>
      {testIds && testIds.map((elm: any) => {
        return <Div><Link to={`/test/${elm.id}`} style={{
          textDecoration: 'none', color: "black", justifyContent: "space-between",
          width: "100%",
          display: "flex"
        }}>
          {elm.description}
          <Button>Start</Button>
        </Link></Div>
      })}
    </div >

  );
}

export default Home;
