import React, { useReducer } from "react";
import axios from 'axios';

//Reducers 
import ProfileReducer from "./ProfileReducer";
import ProfileContext from '../profile/ProfileContext';

const ProfileProvider = props => {
    const { REACT_APP_URI } = process.env

    const initialState = {
        userSelected: null
    }

    const [ profileState ] = useReducer(ProfileReducer, initialState)

    const getUserSelected = async (id) => {
        const userSelected = await axios.get(`${REACT_APP_URI}/users/${id}`)
        // dispatch({
        //     type: "ALDAIR",
        //     playload: users
        // })
        console.log(userSelected)
    }

    return (
        <ProfileContext.Provider value={{
            userSelected: profileState.userSelected,
            getUserSelected
        }}>
            { props.children }
        </ProfileContext.Provider>
    )
}

export default ProfileProvider;