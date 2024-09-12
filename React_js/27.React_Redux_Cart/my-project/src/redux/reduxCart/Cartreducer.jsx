import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, CART_TO_WISHLIST, INCREMENT, DECREMENT } from "../Constant";

const CartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...state];

        case REMOVE_TO_CART:
            return state.filter(item => item.id !== action.data);

        case EMPTY_CART:
            console.log("sweduhjnzwrsexbhjn",action)
            return [];

        case CART_TO_WISHLIST:
            return state;

        case INCREMENT:
            return state;

        case DECREMENT:
            return state;

        default:
            return state;
    }
};

export default CartReducer;
