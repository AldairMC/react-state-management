import React from "react";

const User = ({ user }) => {
    return (
        <div className="_user_container_">
            <img src={user.avatar} alt="Avatar" width={150} />
            From User {user.email}
        </div>
    )
}

export default User;