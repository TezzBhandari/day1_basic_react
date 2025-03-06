import Profile from "./components/Profile";
interface Profile {
  id: number;
  profileImg: string;
  size: number;
}
const profiles: Array<Profile> = [
  {
    id: 1,
    profileImg:
      "https://images.pexels.com/photos/30495756/pexels-photo-30495756/free-photo-of-rustic-wooden-chairs-in-lush-antalya-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    size: 100,
  },
  {
    id: 2,
    profileImg: "https://i.imgur.com/1bX5QH6.jpg",
    size: 100,
  },
  {
    id: 3,
    profileImg: "https://i.imgur.com/OKS67lh.jpg",
    size: 100,
  },
  {
    id: 4,
    profileImg:
      "https://images.pexels.com/photos/30495756/pexels-photo-30495756/free-photo-of-rustic-wooden-chairs-in-lush-antalya-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    size: 60,
  },
];

function App() {
  return (
    <div>
      {profiles.map((profile) => {
        return (
          <Profile
            key={profile.id}
            imageUrl={profile.profileImg}
            size={profile.size}
          />
        );
      })}
    </div>
  );
}

export default App;
