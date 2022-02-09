import React, { useContext } from 'react'
import ProfileContext from "../../context/profile/ProfileContext"

const Navbar = () => {
  const { cleanUserSelected } = useContext(ProfileContext)

  return (
    <nav className="_navbar_container_">
      <span 
        className="_navbar_logo_" 
        onClick={cleanUserSelected}>
          User.Pro
        </span>
    </nav>
  )
}

export default Navbar;