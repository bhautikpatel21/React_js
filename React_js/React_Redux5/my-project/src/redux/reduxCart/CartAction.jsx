import { ADD_TO_CART  ,  REMOVE_TO_CART , EMPTY_CART , CART_TO_WISHLIST , INCREMENT , DECREMENT } from "../Constant";


export function add_cart(data){
    return{
        type:ADD_TO_CART,
        data
    }
}

export function remove_cart(data){
    return{
        type:REMOVE_TO_CART,
        data
    }
}

export function empty_cart(data){
    return{
        type:EMPTY_CART,
        data
    }
}

export function cart_to_wishlist(data){
    return{
        type:CART_TO_WISHLIST,
        data
    }
}

export function increment(data){
    return{
        type:INCREMENT,
        data
    }
}

export function decrement(data){
    return{
        type:DECREMENT,
        data
    }
}