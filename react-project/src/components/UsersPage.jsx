import { Link, useParams } from "react-router-dom";

function UsersPage() {
  const { id } = useParams();
  return (
    <>
      <h1>USERS</h1>
      <ul>
        <li>
          <Link to="/users/1">USER 1</Link>
        </li>
        <li>
          <Link to="/users/2">USER 2</Link>
        </li>
        <li>
          <Link to="/users/3">USER 3</Link>
        </li>
      </ul>
      <p>{id}</p>
    </>
  );
}

export default UsersPage;
