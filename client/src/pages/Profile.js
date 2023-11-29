import axios from "axios";
import { useEffect, useState } from "react";
import useGetUser from "../hooks/useGetUser";
import { Button, Form, Spin, Tabs, message } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";
import ExperienceProjects from "../components/ExperienceProjects";
const Profile = ({ onFormData }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const token = localStorage.getItem("token");
  const { data, getUser } = useGetUser();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post(
        "api/user/update",
        {
          ...values,
          image,
          _id: data._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      getUser();
      message.success("Profile updated successfully");
    } catch (error) {
      setLoading(false);
      message.error("Update failed");
    }
  };

  const items = [
    {
      key: "1",
      label: "Personal Information",
      children: <PersonalInfo onFileChange={handleFileChange} />,
    },
    {
      key: "2",
      label: "Skills and Education",
      children: <SkillsEducation />,
    },
    {
      key: "3",
      label: "Experience / Projects",
      children: <ExperienceProjects />,
    },
  ];

  useEffect(() => {
    getUser();
  }, [getUser]);

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data, form]);
  return (
    <>
      {loading && <Spin size="large" />}
      <div className="update-profile">
        <h4>
          <b>Update Profile</b>
        </h4>
        <hr />
        <Form
          layout="horizontal"
          form={form}
          onValuesChange={(_, allValues) => {
            onFormData(allValues);
          }}
          onFinish={onFinish}
          initialValues={data}
        >
          <Tabs
            defaultActiveKey="1"
            items={items}
            indicatorSize={(origin) => origin - 16}
          />
          <Button type="primary" htmlType="submit">
            UPDATE
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Profile;
