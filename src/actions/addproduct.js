import types from '../types';
import { createProductAPI } from '../apis/products'
import store from "../store"
import { toast } from 'react-toastify'


const { dispatch } = store;

const productsfetch = () => {
    dispatch({
        type: types.ADD_PRODUCT_REQUEST
    })
}

export const addProduct = (data) => {
    productsfetch();
    return new Promise((resolve, reject) => {
        console.log("working or not???")
        createProductAPI(data).then((res) => {
            console.log("working or not2222???")
            dispatch({
                type: types.ADD_PRODUCT_SUCCESS,
                payload: res
            })

            resolve(res)

        }).catch(err => {
            toast.error(err.response.data.message || "Something went Wrong !!")
            reject(err);
        })

    })
}

