import { BUY_TEA } from "./TeaConstant";

const initialState = {
    numOfTea:10
}

export const TeaReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_TEA: return{
            ...state,
            numOfTea:state.numOfTea - 1
        }
        default: return state
    }
}