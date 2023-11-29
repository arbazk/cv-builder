import React from "react";
import { Button, Form, Input, Spin, message } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from "axios";

const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/user/register", values);
      setTimeout(() => {
        setLoading(false);
        message.success(response.data.message);
        form.resetFields();
        navigate("/login");
      }, 500); // delay of 2 seconds
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
        message.error(error.response.data.message);
        form.resetFields();
      }, 500); // delay of 2 seconds
    }
  };

  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item
          name="userName"
          label="Username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "The input is not valid E-mail!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please input your Password!" },
            { min: 8, message: "Password must be minimum 8 characters." },
          ]}
        >
          <Input.Password
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={[
            { required: true, message: "Please confirm your Password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/login">Click Here To Login</Link>
          <Button type="primary" htmlType="submit">
            REGISTER
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
