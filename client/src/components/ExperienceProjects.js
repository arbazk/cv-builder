import { Button, Form, Input } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
const ExperienceProjects = () => {
  return (
    <div>
      <h5>
        <b>Experience</b>
      </h5>
      <hr />
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            <div className="inputWrapper">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div key={key}>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "company"]}
                      rules={[{ required: true, message: "Missing company" }]}
                    >
                      <Input placeholder="Company" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "years"]}
                      rules={[{ required: true, message: "Missing Years" }]}
                    >
                      <Input placeholder="Enter years" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "place"]}
                      rules={[{ required: true, message: "Missing place" }]}
                    >
                      <Input placeholder="Place" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "yearRange"]}
                      rules={[
                        { required: true, message: "Missing year range" },
                      ]}
                    >
                      <Input placeholder="Year Range" />
                    </Form.Item>
                  </div>
                  <div>
                    <MinusCircleOutlined
                      style={{ fontSize: "25", margin: 0, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5>
        <b>Projects</b>
      </h5>
      <hr />
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            <div className="inputWrapper experienceWrapper">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "title"]}
                      rules={[{ required: true, message: "Missing title" }]}
                    >
                      <Input placeholder="Title" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "description"]}
                      rules={[
                        { required: true, message: "Missing description" },
                      ]}
                    >
                      <Input placeholder="Description" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "yearRange"]}
                      rules={[
                        { required: true, message: "Missing year range" },
                      ]}
                    >
                      <Input placeholder="Year range" />
                    </Form.Item>
                  </div>
                  <div>
                    <MinusCircleOutlined
                      style={{ fontSize: "25", margin: 0, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Project
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default ExperienceProjects;
