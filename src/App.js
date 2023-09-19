import Login from "./components/Login"
import Logout from "./components/Logout"
import Profile from "./components/Profile"


function App() {
  return (
    <div className="h-screen bg-gh-dark text-white text-medium">
      <h1 className="text-center">hewhehehe</h1>
      <div className="flex justify-around">
        <Login /> 
        <Logout />
      </div>
      <Profile />
    </div>
  );
}

export default App;
