
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IQuestion, IRouteParams } from '../../models/data.models';
import QOption from '../QOption/QOption.component';
import Question from './Question.component';
import { getQuestions } from '../../services/APIService';
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

function QuestionPage() {
    const [questionData, setQuestionData] = useState<IQuestion>({
        questionId: "",
        questionText: "",
        questionDescription: "",
        options: [],
        answerOptionId: ""
    });
    // const [currentQuestion, setCurrentQuestion] = useState(0)
    const [testSubmission, setTestSubmission] = useState({})
    let { testId,question } = useParams();
    const nextQuestionHandler=()=>{
        
    }
    const handleResponse=(res:any) => {
        var cq
        if(question){
            cq =parseInt(question)
            
        }else{cq=0}
        setQuestionData(res.data[0].questions[cq])


    }
    useEffect(() => {
        // Update the document title using the browser API
        getQuestions(testId).then(handleResponse)
    },[question]);
    return (
        <>
            <Question questionData={questionData} />
        </>
    );
}

export default QuestionPage;
