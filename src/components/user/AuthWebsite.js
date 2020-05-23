import React from "react";

const AuthWebsite = ({ logout, user }) => {
  return (
    <div>
      <h3>Dit is AutWebsite: logout</h3>
      <h2>Hello, {user}</h2>
      <div className="logout_button" onClick={() => logout()}>
        logout
      </div>
    </div>
  );
};

export default AuthWebsite;
