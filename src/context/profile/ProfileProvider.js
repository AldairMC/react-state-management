import React, { useReducer } from "react";
import axios from 'axios';

//Type
import { GET_PROFILE } from "../types";

//Reducers 
import ProfileReducer from "./ProfileReducer";
import ProfileContext from '../profile/ProfileContext';

const ProfileProvider = props => {
    const { REACT_APP_URI } = process.env

    const initialState = {
        userSelected: null
    }

    const [ profileState, dispatch ] = useReducer(ProfileReducer, initialState)

    const getUserSelected = async (id) => {
        const userSelected = await axios.get(`${REACT_APP_URI}/users/${id}`)
        dispatch({
            type: GET_PROFILE,
            payload: userSelected.data.data
        })
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