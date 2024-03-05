import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const LoginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container onSubmit={(event) => LoginUser(event)}>
      {/* Form에서는 onclick이 아닌 onSubmit을 활용
      Form에서는 event.preventDefault를 사용해서 페이지 refresh를 막아준다. */}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
