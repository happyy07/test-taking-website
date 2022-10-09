
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;
function Home(props: any) {
  const [testIds, setTestIds] = useState([])
  useEffect(() => {
    // Update the document title using the browser API
    console.log(testIds)
    console.log("---",props)
    setTestIds(props.tests.testIds)
  }, [props]);
  return (
    <div>
      {testIds && testIds.map((elm: string) => {
        return <Link to={`/test/${elm}`}>${elm}</Link>
      })}
    </div>

  );
}

export default Home;
