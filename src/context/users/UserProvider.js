import React, { useReducer } from "react";
import axios from 'axios';

//types
import { GET_USERS, CHANGE_PAG } from "../types";

//Reducers 
import UserReducer from "./UserReducer";
import UserContext from '../users/UserContext';

const UserProvider = props => {
    const { REACT_APP_URI } = process.env

    const initialState = {
        users: [],
        pag: 1
    }

    const [ userState, dispatch ] = useReducer(UserReducer, initialState)

    const getUsers = async () => {
        const users = await axios.get(`${REACT_APP_URI}/users`)
        dispatch({
            type: GET_USERS,
            payload: users.data.data
        })
    }

    const changePag = async key => {
        const pag_actual = userState.pag + key
        const pag = (pag_actual <= 0)? 1 : pag_actual
        const users = await axios.get(`${REACT_APP_URI}/users?page=${pag}`)
        dispatch({
            type: CHANGE_PAG,
            payload: {
                "users": users.data.data, 
                "pagina": pag
            }
        })
    }

    return (
        <UserContext.Provider value={{
            users: userState.users,
            pag: userState.pag,
            getUsers,
            changePag
        }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;
