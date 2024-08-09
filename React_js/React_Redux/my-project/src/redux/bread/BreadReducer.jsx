import { BUY_BREAD } from './BreadContant'

const initialState = {
    numOfCake:10
}

export const BreadReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_BREAD: return{
            ...state,
            numOfBread:state.numOfBread - 1
        }
        default: return state
    }
}