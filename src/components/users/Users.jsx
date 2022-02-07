import React, { useContext, useEffect } from "react";
// import AppContext from "../../context/AppContext";
import UserContext from "../../context/users/UserContext";

//componets
import User from "./User";

const Users = () => {
    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            {
                users.map((user, key) => (
                    <User 
                        {...{ key }}
                        user={user}
                    />
                ))
            }
        </div>
    )
}

export default Users;