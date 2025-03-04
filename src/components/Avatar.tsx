interface AvatarProps {
  person: Person;
  size: number;
}

export interface Person {
  name: string;
  profile: string;
}

export default function Avatar(props: AvatarProps) {
  const person = props.person;
  return (
    <img
      className="avatar"
      src={person.profile}
      alt={person.name}
      width={props.size}
      height={props.size}
    />
  );
}
