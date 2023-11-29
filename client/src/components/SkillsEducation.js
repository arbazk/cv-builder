import { Button, Form, Input } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";

const SkillsEducation = () => {
  return (
    <div>
      <h5>
        <b>Education</b>
      </h5>
      <hr />
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className="inputWrapper">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "qualification"]}
                      rules={[
                        { required: true, message: "Missing qualification" },
                      ]}
                    >
                      <Input placeholder="Qualification" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "Percentage"]}
                      rules={[
                        { required: true, message: "Missing percentage" },
                      ]}
                    >
                      <Input placeholder="Enter Percentage" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "institution"]}
                      rules={[
                        { required: true, message: "Missing institution" },
                      ]}
                    >
                      <Input placeholder="Institution" />
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
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h5>
        <b>Skills</b>
      </h5>
      <hr />
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className="skillsWrapper inputWrapper">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "technology"]}
                      rules={[
                        { required: true, message: "Missing technology" },
                      ]}
                    >
                      <Input placeholder="Technology" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      style={{ margin: 0 }}
                      {...restField}
                      name={[name, "rating"]}
                      rules={[{ required: true, message: "Missing rating" }]}
                    >
                      <Input placeholder="Rating" />
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
                Add Skills
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default SkillsEducation;
