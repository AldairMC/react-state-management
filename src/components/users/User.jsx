import React from "react";

const User = ({ user }) => {
    return (
        <div className="_user_container_">
            <img src={user.avatar} alt="Avatar" width={100} />
            <span>{user.first_name} {user.last_name}</span>
            <span>{user.email}</span>
        </div>
    )
}

export default User;