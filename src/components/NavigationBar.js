import { Navbar, Container, Nav } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
export const NavigationBar = () => {
  const navigate = useNavigate()
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/")
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/products")
            }}
          >
            Products
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
