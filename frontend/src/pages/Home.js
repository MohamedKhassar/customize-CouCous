import { useAuthContext } from "../hooks/useAuthContext";

// components

const Home = () => {
  const { user } = useAuthContext();
  console.log(user);
  return <div className="home"><h1>{user.name}</h1></div>;
};

export default Home;
