import * as auth from "./auth";
import * as sign from "./sign";
import * as products from "./products"
import * as addProducts from "./addProducts"
export default {
  ...auth,
  ...sign,
  ...products,
  ...addProducts
};
