import { Card } from "react-bootstrap";

const Friend = ({ name, age }) => (
  <>
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>friend</Card.Title>
        <Card.Text>
          name: {name}
          <br></br>
          age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

export default Friend;
