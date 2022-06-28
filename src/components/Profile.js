import React, { useState } from "react";
import { useUser } from "../context/UserContext";

function Profile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: 1,
        username: "You",
        bio: "I am a user",
      });
      setLoading(false);
    }, 1500);
  };
  return (
    <div>
      Profile
      <br />
      <br />
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "Loading..." : "Login"}
        </button>
      )}
      <br />
      <br />
      {JSON.stringify(user)}
      <br />
      <br />
      {user && <button onClick={() => setUser(null)}>Logout</button>}
    </div>
  );
}

export default Profile;
