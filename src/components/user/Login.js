import React, { useState } from "react";
import AuthWebsite from "./AuthWebsite";
import NoAuthWebsite from "./NoAuthWebsite";

function Login() {
  const [user, setUser] = useState(null);

  //   return (
  //     <>
  //       <AuthWebsite />
  //       <NoAuthWebsite />
  //     </>
  //   );

  return user ? (
    <AuthWebsite logout={() => setUser(null)} user={user} />
  ) : (
    <NoAuthWebsite login={(username) => setUser(username)} />
  );
}

export default Login;
