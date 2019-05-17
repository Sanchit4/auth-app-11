import types from "../types";
import { saveObject } from "../utils";


const initialState = {
  loading: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.AUTH_LOADING: {
      return { ...state, loading: true };
    }
    case types.AUTH_SUCCESS: {
      saveObject('user', action.payload);
      const data = action.payload;
      return { ...state, loading: false, user: data };
    }

    default:
      return state
  }
}
