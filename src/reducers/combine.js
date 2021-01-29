import  {USER_ACTION} from "../action/constant"

const initialState ={
    users:JSON.parse(localStorage.user || '[]')
}

export const userDetails = (state = initialState , action)=>{
    switch(action.type) {
        case USER_ACTION:
            const _state = {...state};
            _state.users=[...state.users , action.payload];
            localStorage.setItem("user" , JSON.stringify(action.payload) )
    }
    return state;
}