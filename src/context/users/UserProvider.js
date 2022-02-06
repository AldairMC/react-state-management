import React, { useReducer } from "react";
import axios from 'axios';

//Reducers 
import UserReducer from "./UserReducer";
import UserContext from '../users/UserContext';

const UserProvider = props => {
    const { REACT_APP_URI } = process.env

    const initialState = {
        users: []
    }

    const [ userState ] = useReducer(UserReducer, initialState)

    const getUsers = async () => {
        const users = await axios.get(`${REACT_APP_URI}/users`)
        // dispatch({
        //     type: "ALDAIR",
        //     playload: users
        // })
        console.log(users)
    }

    return (
        <UserContext.Provider value={{
            users: userState.users,
            getUsers
        }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;
