import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="bg-indigo-950 p-5 rounded-xl m-10" 
    onClick={() => 
    logout({ logoutParams: { 
      returnTo: window.location.origin 
      } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;