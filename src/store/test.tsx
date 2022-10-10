import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
import { ITest, ITestState } from '../models/data.models';
import * as API from '../services/APIService';
import { useAppSelector } from './hooks';

// Slice
const initialState:ITestState= {
  test: null,
  testIds:[],
  loading:false,
  activeQuestion:0
}
const slice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest:(state, action)=>{
      state.test = action.payload;
    },
    setTestIds:(state, action)=>{
      state.testIds = action.payload;
    },
    setActiveQuestion:(state, action)=>{
      state.activeQuestion = action.payload;
    }
  },
});
export default slice.reducer
// Actions
export const { setTest ,setTestIds,setActiveQuestion } = slice.actions
export const testSelector = (state:any) => state.test
export const loadingSelector = (state:any) => state.test.loading
export const activeQuestionSelector = (state:any) => state.test.activeQuestion
