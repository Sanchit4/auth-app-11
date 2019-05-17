import { apiPost, apiGet } from "../utils"


export function getPasswordAPI() {

    return apiGet("/user/reset-password")
}