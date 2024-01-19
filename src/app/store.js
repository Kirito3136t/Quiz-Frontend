import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import questionReducer from '../features/auth/question/questionReducer';
import resultReducer from '../features/auth/result/resultReducer';

export const store = configureStore({
  reducer: {  
    auth:authReducer,
    questions:questionReducer,
    result:resultReducer 
  },
});

