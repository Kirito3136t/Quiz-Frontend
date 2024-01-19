import * as Action from  '../features/auth/result/resultReducer'
import { postServerData } from '../helper/Helper'

export const PushAnswer=(result)=>async(dispatch)=>{
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResult=(index)=>async(dispatch)=>{
    try {
        dispatch(Action.updateResultAction(index))
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResult=(resultData)=>{
    const{result,username}=resultData;

    (async()=>{
        try {
            if(result !=[] && !username){
                throw new Error("couldnt gate result")
            }
            await postServerData('http://localhost:5000/api/users/result',resultData,data=>data)
        } catch (error) {
            console.log(error)
        }
    })();
}

 