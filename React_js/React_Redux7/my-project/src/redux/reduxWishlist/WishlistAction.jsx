import { ADD_TO_WISHLIST , REMOVE_TO_WISHLIST , EMPTY_WISHLIST , WISHLIST_TO_CART } from "../Constant";

export function add_wishlist(){
    return{
        type:ADD_TO_WISHLIST
    }
}

export function remove_wishlist(){
    return{
        type:REMOVE_TO_WISHLIST
    }
}

export function empty_wishlist(){
    return{
        type:EMPTY_WISHLIST
    }
}

export function wishlist_to_cart(){
    return{
        type:WISHLIST_TO_CART
    }
}