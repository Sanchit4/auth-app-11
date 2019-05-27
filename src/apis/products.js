import { apiPost, apiGet, apiDelete } from "../utils";

export function getProductsAPI() {
    return apiGet("/products")
}

export function getProductAPI(id) {

    return apiGet("/products/" + id);
}

export function deleteProductAPI(id) {
    return apiDelete("/products/" + id);
}

export function createProductAPI(data) {
    const data1 = new FormData();

    data1.append('name', data.name)
    data1.append('price', data.price)
    data1.append('description', data.description)
    return apiPost("/products", data1);
}