import { createStore } from "redux";
import Reducer from "./Reducer";


const Store = createStore(Reducer)

export default Store