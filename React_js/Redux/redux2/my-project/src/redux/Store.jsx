import { createStore } from "redux";
import { CakeReducer } from "./cake/CakeReducer";
import { TeaReducer } from "./tea/TeaReducer";


const Store = createStore(CakeReducer , TeaReducer)
// const Store =createStore(TeaReducer)

export default Store