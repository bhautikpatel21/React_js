import rootReducer from "./rootReducer";
import { createStore } from "redux";

const Store = createStore(rootReducer)

export default Store