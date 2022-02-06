import React, { useEffect, useContext } from "react";
import ProfileContext from "../../context/profile/ProfileContext";

const Profile = () => {

    const { getUserSelected } = useContext(ProfileContext)

    useEffect(() => {
        getUserSelected(1)
    })

    return (
        <div>
            From profile
        </div>
    )
}

export default Profile;