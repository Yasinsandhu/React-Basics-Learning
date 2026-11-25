const Profile = (props) => {
  return (
    <div className="profile-card">
      <img src={props.image} alt={props.name} />
      <p>Name: {props.name}</p>
      <p>Role: {props.role}</p>
    </div>
  );
};

export default Profile;
