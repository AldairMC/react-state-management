import React, { useContext, useEffect } from "react";
// import AppContext from "../../context/AppContext";
import UserContext from "../../context/users/UserContext";

//componets
import User from "./User";

const Users = () => {
    const { getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            {
                [1, 2, 3, 4].map(key => (
                    <User 
                        {...{ key }}
                        id={key}
                    />
                ))
            }
        </div>
    )
}

export default Users;