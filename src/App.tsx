import Avatar, { Person } from "./components/Avatar";
import Profile from "./components/Profile";

function App() {
  const sam: Person = {
    name: "sam",
    profile: "https://i.imgur.com/1bX5QH6.jpg",
  };

  const rita: Person = {
    name: "rita",
    profile: "https://i.imgur.com/OKS67lh.jpg",
  };

  return (
    <>
      <Profile imageUrl="https://i.imgur.com/1bX5QH6.jpg"  size={50}/>
      <Profile imageUrl="https://i.imgur.com/OKS67lh.jpg" size={100} />
    </>
  );
}

export default App;
