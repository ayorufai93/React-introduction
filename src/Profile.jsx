function profile() {
  const age = 21;
  const location = "Nigeria";
  const status = "Frontend Developer in Training ";

  return (
    <div className="profile">
      <p>Age:{age}</p>
      <p>Location:{location}</p>
      <p>Status:{status}</p>
    </div>
  );
}

export default profile;
console.log();
