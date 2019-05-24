import { apiPost } from "../utils"


export function getPasswordAPI(data) {

    return apiPost("/user/reset-password", data)
}