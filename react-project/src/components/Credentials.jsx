import { useState } from "react";

const Credentials = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const printCredentials = (e) => {
    e.preventDefault();
    alert(`Showing everyone your: Username: ${username} Password: ${password}`);
  };

  return (
    <>
      <form onSubmit={printCredentials}>
        <input
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>GO</button>
      </form>
    </>
  );
};

export default Credentials;
