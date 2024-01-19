//fetch question hook to fetch api and set value to store

import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'
import * as Action from '../features/auth/question/questionReducer'
import { getServerData } from "../helper/Helper"


export const useFetchQuestion=()=>{
    const URL='http://localhost:5000'

    const[getData,setGetData]=useState({
        isLoading:false,
        apiData:[],
        serverError:null
    })

    const dispatch=useDispatch()
    useEffect(() => {
        setGetData(prev => ({
            ...prev,
            isLoading: true,
        }));
    
        (async () => {
            try {
                const [{questions,answers}]=await getServerData('http://localhost:5000/api/users/questions',(data)=>data)
                console.log(answers)

                
                if (questions.length > 0) {
                    setGetData(prev => ({
                        ...prev,
                        isLoading: false,
                        apiData: {questions,answers}
                    }));
    
                    dispatch(Action.startExamAction({question:questions,answers}));
                } else {
                    throw new Error('No question Available');
                }
            } catch (error) {
                setGetData(prev => ({
                    ...prev,
                    isLoading: false,
                    serverError: error,
                }));
            }
        })();
    }, [dispatch]);
    

    return [getData,setGetData]
}

export const MoveNextQuestion=()=>async(dispatch)=>{
    try {
        dispatch(Action.moveNextAction())
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestion=()=>async(dispatch)=>{
    try {
        dispatch(Action.movePrevAction())
    } catch (error) {
        console.log(error)
    }
}

