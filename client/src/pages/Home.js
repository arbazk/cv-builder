import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import template from "../resources/templates/template1.png";
import template1 from "../resources/templates/template2.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Template",
      image: template,
    },
    {
      title: "Simple Template",
      image: template1,
    },
    {
      title: "Simple Template",
      image: template,
    },
  ];
  return (
    <DefaultLayout>
      <div className="home">
        {templates.map((template, index) => {
          return (
            <>
              <div className="template">
                <img src={template.image} height="400" alt="" />
                <div className="text">
                  <p>{template.title}</p>
                  <button
                    onClick={() => {
                      navigate(`/templates/${index + 1}`);
                    }}
                  >
                    TRY
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </DefaultLayout>
  );
};

export default Home;
