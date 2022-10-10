import axios from 'axios'
import { IQuestion,ITest } from '../models/data.models'

const ENDPOINT_URL="http://localhost:3200"
function getTest(testId:string|undefined){
    return axios.get<ITest[]>(`${ENDPOINT_URL}/tests?testId=${testId}`)

}
function getAllTests(){
    return axios.get(`${ENDPOINT_URL}/allTests`)

}

export  {getTest,getAllTests}