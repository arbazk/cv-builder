import React, { useEffect, useState } from "react";
import { Button, Form, Input, Spin, message } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post("api/user/login", values);

      message.success("Login successfull");
      localStorage.setItem("user", JSON.stringify(user.data));
      localStorage.setItem("token", user.data.token);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Login failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="userName" label="Username">
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/register">Click Here To Register</Link>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
