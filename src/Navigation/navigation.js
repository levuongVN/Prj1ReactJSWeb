import SearchIcon from "@mui/icons-material/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ComponentContenSearch from "./contentSearch";

export default function Navigation_Component() {
  const [CheckClickToSearch, setCheckClickToSearch] = useState(false); //
  const [CheckClickToLogin, setCheckClickToLogin] = useState(false);
  function transform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  function ClickToSearch(e) {
    if (!CheckClickToSearch) {
      setCheckClickToSearch(true);
    } else {
      setCheckClickToSearch(false);
    }
  }
  function ClickToLogin(e) {
    if (!CheckClickToLogin) {
      setCheckClickToLogin(true);
    } else {
      setCheckClickToLogin(false);
    }
  }
  const CSSBlur = {
    filter: "blur(5px)",
  };
  return (
      <div className="container-fluid">
        <div
          className="text-center bg-dark card"
          style={CheckClickToSearch ? CSSBlur : {}}
        >
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item col-lg-1 col-md-6 col-12 d-none d-sm-block">
                <Link
                  className="nav-link active bg-white"
                  aria-current="true"
                  to=""
                >
                  Home
                </Link>
              </li>
              <li className="nav-item col-lg-1 col-md-6 col-12 d-none d-sm-block">
                <Link className="nav-link text-light" to="/Courses">
                  Course
                </Link>
              </li>
              <li className="nav-item col-lg-1 col-md-6 col-12 d-none d-sm-block">
                <Link className="nav-link text-light" to="/Contact">
                  Practice
                </Link>
              </li>
              <li className="nav-item col-lg-1 col-md-6 col-12 d-none d-sm-block">
                <Link className="nav-link text-light" to="/Blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item col-lg-2 col-md-7 col-12 d-none d-sm-block">
                <Link className=" nav-link text-light" to="/About">
                  About us
                </Link>
              </li>
              <div className="ms-auto col-12 col-lg-3 col-md-5 justify-content-center d-flex">
                <li className="align-items-center nav-item d-flex">
                  <div className="border pe-5 rounded" onClick={ClickToSearch}>
                    <SearchIcon style={{ color: "#1983bd" }} />
                    <label className="pe-5 text_search">Search...</label>
                  </div>
                </li>
                <li className="nav-item ms-2 ">
                  <button
                    onClick={ClickToLogin}
                    className="btn btn-light text-dark dropdown-toggle"
                    type="button"
                  >
                    Login
                  </button>
                  {CheckClickToLogin && (
                    <div className="login_user_admin  position-absolute">
                      <div
                        className="d-flex ms-auto border border-success p-1 rounded border-2"
                        style={{
                          width: "max-content",
                        }}
                      >
                          <Link to={"/login/user"} style={{borderRight:"1px solid white"}} className="user pe-2 text-light text-decoration-none fs-5">
                            user
                          </Link>
                          <Link to={"/login/admin"} className="ps-2 admin text-light text-decoration-none fs-5">
                            admin
                          </Link>
                      </div>
                    </div>
                  )}
                </li>
              </div>
            </ul>
          </div>
        </div>
      {CheckClickToSearch && (
        <ComponentContenSearch PropsEscKey={setCheckClickToSearch} /> // Truyền props vào cpn con
        // Tuyền setCheckClickToSearch vì nó là một hàm tiến hành các thay đổi để cập nhật vào state
      )}
    </div>
  );
}
