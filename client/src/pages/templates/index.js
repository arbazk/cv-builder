import React, { useEffect } from "react";

import useGetUser from "../../hooks/useGetUser";
// import useReactToPrint from "react-to-print";
import Template1 from "./Template1";
import DefaultLayout from "../../components/DefaultLayout";
import { useParams } from "react-router-dom";
import Template2 from "./Template2";
import { Spin } from "antd";
// import { Button } from "antd";
const Templates = () => {
  const { data, getUser } = useGetUser();

  useEffect(() => {
    getUser();
  }, [getUser]);
  const params = useParams();

  const getTemplate = () => {
    switch (params.id) {
      case "1":
        return data == null ? <Spin /> : <Template1 user={data} />;
      case "2":
        return data == null ? <Spin /> : <Template2 user={data} />;
      default:
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "2em", marginBottom: "20px" }}>
                No Template Found
              </h1>
              <p style={{ fontSize: "1.2em", color: "#888" }}>
                The template you're looking for doesn't exist.
              </p>
            </div>
          </div>
        );
    }
  };
  return (
    <DefaultLayout>
      <div
      // ref={componentRef}
      >
        {getTemplate()}
      </div>
    </DefaultLayout>
  );
};

export default Templates;
