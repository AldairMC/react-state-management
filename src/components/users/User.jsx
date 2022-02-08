import React, { useContext } from "react";
import ProfileContext from "../../context/profile/ProfileContext";

const User = ({ user }) => {
    const { getUserSelected } = useContext(ProfileContext)

    return (
        <div className="_user_container_" onClick={() => getUserSelected(user.id)}>
            <img src={user.avatar} alt="Avatar" width={100} />
            <span>{user.first_name} {user.last_name}</span>
            <span>{user.email}</span>
        </div>
    )
}

export default User;