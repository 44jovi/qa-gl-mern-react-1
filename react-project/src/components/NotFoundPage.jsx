import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1>PAGE NOT FOUND</h1>
      <Link to="/test">HOME</Link>
    </>
  );
}

export default NotFoundPage;
