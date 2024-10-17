import CartReducer from "./reduxCart/Cartreducer";
// import ProductReducer from "./reduxProduct/ProductReducer";
// import WishlistReducer from "./reduxWishlist/WishlistReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cart:CartReducer,
    // product:ProductReducer,
    // wishlist:WishlistReducer
})

export default rootReducer