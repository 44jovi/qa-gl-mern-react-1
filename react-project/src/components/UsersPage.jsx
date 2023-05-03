import { Link, useParams } from "react-router-dom";

function UsersPage() {
  const { id, name } = useParams();
  return (
    <>
      <h1>USERS</h1>
      <ul>
        <li>
          <Link to="/users/1/bob">USER 1</Link>
        </li>
        <li>
          <Link to="/users/2/jim">USER 2</Link>
        </li>
        <li>
          <Link to="/users/3/dave">USER 3</Link>
        </li>
      </ul>
      <p>
        {id} {name}
      </p>
    </>
  );
}

export default UsersPage;
