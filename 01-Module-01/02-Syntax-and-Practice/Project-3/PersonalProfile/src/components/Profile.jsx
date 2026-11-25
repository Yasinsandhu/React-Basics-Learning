const Profile = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <p>Name: {props.name}</p>
      <p>Role: {props.role}</p>
      <p>Introduction: {props.introduction}</p>
    </div>
  );
};

export default Profile;
