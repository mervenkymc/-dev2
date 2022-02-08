import { Card } from "react-bootstrap"
export const CardComponent = ({ onClick, title, category, id, detail }) => {
  return (
    <Card
      onClick={onClick}
      id={id}
      style={{ width: "18rem", cursor: "pointer" }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{detail}</Card.Text>
      </Card.Body>
    </Card>
  )
}
