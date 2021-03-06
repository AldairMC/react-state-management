import { GET_USERS, CHANGE_PAG } from "../types";

export default (state, action) => {
    const { type, payload } = action

    switch(type){
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case CHANGE_PAG:
            return {
                ...state,
                users: payload.users,
                pag: payload.pagina
            }
        default:
            return state
    }
}