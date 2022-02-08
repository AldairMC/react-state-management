import { GET_PROFILE } from "../types";

export default (state, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                userSelected: payload
            }
        default: 
            return state
    }
}