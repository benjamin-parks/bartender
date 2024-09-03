// src/pages/User.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { username } = useParams(); // Extract the user ID from the URL
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/api/users/${username}`) // Fetch user data based on ID
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h1>{user.username}</h1> {/* Display the username */}
    </div>
  );
};

export default User;
