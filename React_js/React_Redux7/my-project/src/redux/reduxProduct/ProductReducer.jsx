import { PRODUCT_ADD , PRODUCT_DELETE , PRODUCT_UPDATE ,PRODUCT_LIST } from "../Constant";


const ProductReducer = (state , action) => {
    switch(action.type){
        case PRODUCT_ADD:return{

        }
        case PRODUCT_DELETE:return{

        }
        case PRODUCT_UPDATE:return{

        }
        case PRODUCT_LIST:return{

        }
        default:return state
    }
}

export default ProductReducer