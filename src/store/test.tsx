import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
import { ITest, ITestState } from '../models/data.models';
import * as API from '../services/APIService';
import { useAppSelector } from './hooks';

// Slice
const initialState: ITestState = {
  test: null,
  testIds: [],
  loading: false,
  activeQuestion: 0,
  testStarted: false
}
const slice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload;
    },
    setTestIds: (state, action) => {
      state.testIds = action.payload;
    },
    setActiveQuestion: (state, action) => {
      state.activeQuestion = action.payload;
    },
    setTestStarted: (state, action) => {
      state.testStarted = action.payload;
    },
    setSelectedAnswer: (state, action) => {
      if (state.test) {
        state.test.questions[state.activeQuestion].selectedAnswer = action.payload;
      }
    },
  },
});
export default slice.reducer
// Actions
export const { setTest, setTestIds, setActiveQuestion, setTestStarted,setSelectedAnswer } = slice.actions
export const testSelector = (state: any) => state.test
export const loadingSelector = (state: any) => state.test.loading
export const activeQuestionSelector = (state: any) => state.test.activeQuestion
export const testStartedSelector = (state: any) => state.test.testStarted
export const testIdselector = (state: any) => state.test.testIds
