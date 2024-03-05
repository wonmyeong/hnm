import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate }) => {
  console.log(authenticate);
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      console.log("we click this key");
      //입력한 검색어를 읽어와서
      //url을 바꿔준다  (javscript는 .value로 가져온다)
      let keyword = event.target.value;
      console.log("keyword : ", keyword);

      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate == true ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          className="logo-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWX-khOf9-4QEQSMTZQ_Nip-as5dQom0MnBVgpvDK-QQ&s"
          onClick={goToMainPage}
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
          <div className="input-box">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              placeholder="search Item"
              onKeyDown={(event) => search(event)}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
