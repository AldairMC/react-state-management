import React, { useContext } from "react";
import ProfileContext from "../../context/profile/ProfileContext";

const Profile = () => {

    const { userSelected } = useContext(ProfileContext)

    return (
        <div className="_profile_container_">
            {(userSelected)? 
                <span className="_container_profile_selected_">
                    <img 
                        src={userSelected.avatar} 
                        alt="Avatar"
                        className="_avatar_profile_selected_"
                        width={230}
                    />
                    <span className="_name_profile_selected_">{userSelected.first_name} {userSelected.last_name}</span>
                    <span className="_email_profile_selected_">{userSelected.email}</span>
                </span>
            : <>No user selected</>}
        </div>
    )
}

export default Profile;