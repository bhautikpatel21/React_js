import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from "../Constant";

const WishlistReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [action.wishdata, ...state];
        
            case REMOVE_FROM_WISHLIST:
                return state.filter(item => item.id !== action.id); // Ensure action.id is correct
                
             // Updated to match action payload
        
        case EMPTY_WISHLIST:
            return []; // Clears the wishlist
        
        case WISHLIST_TO_CART:
            // This needs logic based on what you want to achieve
            return state; // Placeholder
        
        default:
            return state;
    }
};

export default WishlistReducer;
