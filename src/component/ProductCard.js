import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const showDetail = () => {
    //redirect를 활용해서 페이지를 튕겨준다.
    navigate(`/product/${item.id}`, { state: { item } });
  };

  return (
    <div onClick={showDetail}>
      {/* item이 있는지 항상 먼저 확인 */}

      <img
        src={item?.img}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={isHovered ? "product-img hovered" : "product-img"}
      />
      <div>{item?.choice === true ? "conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
