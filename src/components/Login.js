import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return ( 
    <div className="">
        <button className="bg-indigo-950 p-5 rounded-xl m-10"  onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  )
};

export default LoginButton;