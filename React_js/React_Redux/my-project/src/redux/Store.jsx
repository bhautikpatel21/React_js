import { createStore } from "redux";
import { CakeReducer } from "./cake/CakeReducer";
import { BreadReducer} from './bread/BreadReducer'


const Store = createStore(CakeReducer,BreadReducer) ;

export default Store