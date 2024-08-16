import React from 'react'
import ChocoReducer from './choco/ChocoReducer'
import { CakeReducer } from './cake/CakeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    CakeReducer,
    ChocoReducer
})

export default rootReducer
