import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log("user", user);
  if (!user) {
    return <h3>User not found</h3>;
  }
  return <div>Welcome {user.username}</div>;
}

export default Profile;
