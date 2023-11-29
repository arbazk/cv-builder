import React, { useCallback, useEffect } from "react";
import "../resources/defaultLayout.css";
import { jwtDecode } from "jwt-decode";
import { Button, Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import useGetUser from "../hooks/useGetUser";

const DefaultLayout = (props) => {
  const { data, getUser } = useGetUser();

  let timer = null;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);
  const items = [
    {
      key: "1",
      label: <Link to="/home">Home</Link>,
    },
    {
      key: "2",
      label: "Log Out",
      onClick: handleLogout,
    },
  ];

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const expiryTime = decodedToken.exp * 1000;
      const timeoutDuration = expiryTime - new Date().getTime();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = setTimeout(() => {
        handleLogout();
      }, timeoutDuration);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [handleLogout, token]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="layout">
      <div className="header">
        <h1
          onClick={() => {
            navigate("/home");
          }}
          style={{ cursor: "pointer", color: "white" }}
        >
          CV Builder
        </h1>
        <Dropdown
          style={{ border: "1px solid white", color: "white" }}
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Button
            style={{
              border: "1px solid black",
              background: "white",
              color: "black",
            }}
          >
            {data?.userName}
          </Button>
        </Dropdown>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
