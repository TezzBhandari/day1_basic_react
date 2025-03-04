interface ProfileProps {
  imageUrl: string;
  size: number;
}

function Profile(props: ProfileProps) {
  return (
    <img
      style={{ borderRadius: "50%" }}
      src={props.imageUrl}
      width={props.size}
      height={props.size}
      alt="profile image"
    />
  );
}

export default Profile;
