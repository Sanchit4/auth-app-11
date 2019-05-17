import types from "../types"

const initialstate = {

    loading: false,
    addProduct: {}
}


export default function (state = initialstate, action) {
    switch (action.type) {
        case types.ADD_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case types.ADD_PRODUCT_SUCCESS: {
            const data = action.payload

            return {
                ...state,
                loading: false,
                addProduct: data
            }
        }

        case types.ADD_PRODUCT_FAILURE: {
            return {
                ...state,
                loading: false,
                addProduct: {}
            }
        }

        default:
            return { ...state }
    }
}