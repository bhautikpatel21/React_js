import { ADD_TO_WISHLIST , REMOVE_TO_WISHLIST , EMPTY_WISHLIST , WISHLIST_TO_CART } from "../Constant";


const WishlistReducer = (wishdata = [] , action) => {
    switch(action.type){
        case ADD_TO_WISHLIST:
            return [action.wishdata , ...wishdata]
        case REMOVE_TO_WISHLIST:return{

        }
        case EMPTY_WISHLIST:return{

        }
        case WISHLIST_TO_CART:return{

        }
        default:return wishdata
    }
}

export default WishlistReducer