import { Form, Input } from "antd";

import React from "react";
const { TextArea } = Input;
const PersonalInfo = (props) => {
  return (
    <div>
      <div className="">
        <div className="">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              { required: true, message: "Please input your Last Name!" },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item
            name="mobileNo"
            label="Mobile No"
            rules={[
              { required: true, message: "Please input your Mobile No!" },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item
            name="portfolio"
            label="Portfolio"
            rules={[
              {
                required: true,
                message: "Please input your Portfolio link!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item
            name="image"
            label="Upload Picture"
            rules={[
              {
                required: true,
                message: "Please input your Portfolio link!",
              },
            ]}
          >
            <div class="mb-3">
              <input
                accept="image/*"
                className="form-control"
                onChange={props.onFileChange}
                id="formFileMd"
                type="file"
              />
            </div>
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item name="careerObjective" label="Career Objective">
            <TextArea className="text-area" />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item name="address" label="Address">
            <TextArea className="text-area" />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
