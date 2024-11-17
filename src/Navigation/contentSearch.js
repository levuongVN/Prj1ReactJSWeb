import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ComponentContenSearch(props) {
  const inputRef = useRef(null); // Khai báo ref cho input
  // Tìm kiếm khi người dùng nhập vào
  const [searchValue, setSearchValue] = useState("");
  const [valueSearchArray, setValueArray] = useState([]); // Mảng lưu các gợi ý tìm kiếm
  const navigate = useNavigate(); // Nhằm chuyển đổi đường dẫn giưuax các route
  useEffect(() => {
    inputRef.current.focus(); 
    // Khi click vào search sẽ tự động focus vào trường input luôn, không cần click vào để search nữa
  }, []);
  useEffect(() => {
    CheckSearch();
    // console.log(true)
  }, [searchValue]); // Khi giá trị input của search thay đổi, sẽ gọi hàm này

  // Truyền giá trị từ cpn cha vào cpn con (props), để esc cpn search
  function handleCheckEscSearch() {
    props.PropsEscKey(false);
  }

  function CheckSearch() {
    const DataArr = ["ReactJS?", "What is c++?", "How to code for beginners?"];
    if (searchValue.length <= 0) {
      return;
    }
    const ValueSugestionArray = DataArr.filter(item=>{ // item đại diện cho các giá trị trong DataArr
      return item.toLowerCase().includes(searchValue.toLowerCase());
    })
    setValueArray(ValueSugestionArray);
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearchValue(e.target.value);
  }

  function EnterSearch(e) {
    if (e.key === "Enter") {
      navigate(`/search-result?query=${valueSearchArray}`);
    } else if (e.key === "Escape") { // Thay đổi "Esc" thành "Escape"
      handleCheckEscSearch();
    }
  }
  return (
    <div
      className="container col-6 bg-light rounded position-absolute top-50 start-50 translate-middle"
      style={{ zIndex: "2" }}
    >
      <div className="row Search">
        <form className="col-12">
          <Box
            sx={{ width: "100%" }}
            className="d-flex align-items-center border-bottom"
          >
            <SearchIcon sx={{ color: "3, 140, 252" }} />
            <input
              type="search"
              ref={inputRef} // Gán ref cho input
              placeholder={`Search...`}
              style={{
                width: "100%",
                border: "none",
                fontSize: "larger",
                outline: "none",
              }}
              onChange={handleSearch}
              onKeyDown={EnterSearch} // Bắt sự kiện keydown cho Enter
            />
            <button
              type="button"
              style={{ border: "1px solid black", opacity: "0.8" }}
              onClick={handleCheckEscSearch}
              className="rounded"
            >
              esc
            </button>
          </Box>
          <div className="card" style={{ width: "100%" }}>
            <ul className="list-group list-group-flush">
              {valueSearchArray && valueSearchArray.map((item, key)=>{
                // Duyệt từng phần tử và in chúng ra thôi, từ khoá key để cpn tự re-render, tránh báo lỗi
                return(
                  <li key={key} className="list-group-item">
                    <Link to={`/search-result?query=${item}`} className="text-decoration-none">
                      {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="CardResult">
            <div className="row container">
              <p>Somethings you should to read</p>
              <Link
                to={`/Experience when debugging`}
                className="col border rounded m-1 text-decoration-none fs-5 "
              >
                Experience when debugging
              </Link>
              <Link
                to={`/Java, is the best programming`}
                className="col rounded border m-1 text-decoration-none fs-5"
              >
                Java, is the best programming
              </Link>
            </div>
            <div className="row container">
              <Link
                to={`/C++ For beginners`}
                className="col border rounded m-1 text-decoration-none fs-5 "
              >
                C++ For beginners
              </Link>
              <Link
                to={`/What is the ReactJS?`}
                className="col border rounded m-1 text-decoration-none fs-5"
              >
                What is the ReactJS?
              </Link>
            </div>
            <div className="row container">
              <Link
                to={""}
                className="col border rounded m-1 text-decoration-none fs-5 "
              >
                All of the projects in this section
              </Link>
              <Link
                to={""}
                className="col border rounded m-1 text-decoration-none fs-5"
              >
                How to write good code?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}