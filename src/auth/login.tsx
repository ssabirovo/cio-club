import React from "react";

import { GoogleLogin } from "react-google-login";
const clientId =
  "1084261722186-769vrdq6nvifl54js8tusvuuo3j0sa02.apps.googleusercontent.com";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const onSuccess = (res: any) => {
    console.log("SUCCESS REGISTERED ", res.profileObj);
  };

  const onFailure = (res: any) => {
    console.log("LOGIN FAILED", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
