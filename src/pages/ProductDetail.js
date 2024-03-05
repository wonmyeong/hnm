import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
// 또는 {useParams} 통해서 가져온다.
//id가져오기 성공 데이터 가져오기 이어서 하기

const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState(null);

  const {
    state: {
      item: { id },
    },
  } = useLocation();

  const selectProduct = async () => {
    let url = `https://my-json-server.typicode.com/wonmyeong/hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setSingleProduct(data);
  };

  useEffect(() => {
    selectProduct();
  }, []);

  return (
    <Container className="selected-item">
      <Row>
        <Col>
          <img src={singleProduct?.img}></img>
        </Col>
        <Col className="info">
          <div>{singleProduct?.title}</div>
          <div>{singleProduct?.price}</div>
          <div>{singleProduct?.choice === true ? "conscious choice" : ""}</div>
          <ButtonGroup vertical>
            <DropdownButton
              as={ButtonGroup}
              title="Size"
              id="bg-vertical-dropdown-1"
            >
              {singleProduct?.size.map((size) => (
                <Dropdown.Item eventKey="1">{size}</Dropdown.Item>
              ))}
            </DropdownButton>
          </ButtonGroup>
          <button>추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
