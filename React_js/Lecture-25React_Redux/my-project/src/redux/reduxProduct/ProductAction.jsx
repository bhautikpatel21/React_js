import { PRODUCT_ADD , PRODUCT_LIST  , PRODUCT_UPDATE , PRODUCT_DELETE } from "../Constant";

export function add_product(){
    return{
        type:PRODUCT_ADD
    }
}

export function list_product(){
    return{
        type:PRODUCT_LIST
    }
}

export function delete_product(){
    return{
        type:PRODUCT_DELETE
    }
}

export function update_product(){
    return{
        type:PRODUCT_UPDATE
    }
}