import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import {MdAccessibleForward} from 'react-icons/md';
// import {AiFillSmile} from 'react-icons/ai';
// import {BiCodeAlt} from 'react-icons/bi';
import {BiSolidCat} from 'react-icons/bi';
import axios from "axios";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();

  const fetchData = async () => {
    try {
      console.log("fetching data");
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: `http://localhost:3000/api/v1`
        },
      });

      const url = `http://localhost:8080/authorized`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  
  if (isLoading) {
    return <div className="flex flex-col items-center"> 
      <BiSolidCat className="animate-spin text-white"/> 
    </div>;
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center">
        <img src={user.picture} alt={user.name} className="object-scale-down" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.sub}</p>
      </div>
    )
  )
} 

export default Profile;