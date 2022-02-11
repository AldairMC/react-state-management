import React from "react";

//components
import Users from "../users/Users";
import Profile from "../profile/Profile";
import Navbar from "../navbar/Navbar";
import Pagination from "../pagination/Pagination";

const App = () => {
  return (
    <div className="_principal_container_">
      <div className="_container_navbar_">
        <Navbar />
      </div>
      <div className="_container_user_profile_">
        <Users />
        <Profile />
      </div>
      <div className="_container_pagination_">
        <Pagination />
      </div>
    </div>
  );
}

export default App;
