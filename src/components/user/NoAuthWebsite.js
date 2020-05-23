import React, { useState } from "react";

const NoAuthWebsite = ({ login }) => {
  const [userName, setUserName] = useState("");

  const extraLogin = () => {
    login(userName);
    console.log("login username:", userName);
  };

  return (
    <>
      <h3>dit is NoAuthWebsite: login </h3>
      <input
        placeholder="username"
        required="required"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <button onClick={() => extraLogin(userName)}>submit</button>
    </>
  );
};

export default NoAuthWebsite;
