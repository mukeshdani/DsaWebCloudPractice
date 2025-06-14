const ReuseComp = ({ user }) => {
  return (
    <div>
      <h3>Name: <span style={{ color: "green" }}>{user.name}</span></h3>
      <h3>Age: <span style={{ color: "green" }}>{user.age}</span></h3>
      <h3>Email: <span style={{ color: "green" }}>{user.email}</span></h3>
    </div>
  );
};

export default ReuseComp