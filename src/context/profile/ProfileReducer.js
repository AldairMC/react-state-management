import { GET_PROFILE, CLEAN_USER_SELECTED } from "../types";

export default (state, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                userSelected: payload
            }
        case CLEAN_USER_SELECTED:
            return {
                ...state,
                userSelected: payload
            }
        default: 
            return state
    }
}