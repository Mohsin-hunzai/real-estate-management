import {USER_ACTION} from "./constant"

export const userAction = (payload)=>{
    return{
        type: USER_ACTION,
        payload
    }
}