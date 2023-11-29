import React, { useState } from "react";
import "../../resources/templates.css";
import { usePDF } from "react-to-pdf";
import Profile from "../Profile";
import { BiSolidDownload } from "react-icons/bi";
import { Image } from "antd";
function Template2({ user }) {
  const [templateData, setTemplateData] = useState(null);
  const finalData = templateData || user;
  const { toPDF, targetRef } = usePDF({
    filename: `${finalData?.userName}.pdf`,
  });

  const handleFormData = (data) => {
    setTemplateData(data);
  };

  return (
    <>
      <div className="profile-section-divider">
        <div className="floating_downbtn" onClick={() => toPDF()}>
          <BiSolidDownload style={{ width: "50%", height: "50%" }} />
        </div>
        <Profile onFormData={handleFormData} />
        <div className="template-preview">
          <div className="template1-parent" ref={targetRef}>
            <div className="top d-flex justify-content-between">
              <div className="flex-column">
                <h1>
                  {finalData?.firstName?.toUpperCase()}{" "}
                  {finalData?.lastName?.toUpperCase()}
                </h1>

                <p>{finalData?.email}</p>
                <p>{finalData?.address}</p>
                <p>{finalData?.mobileNo}</p>
              </div>
              <div style={{ borderRadius: "100%", overflow: "hidden" }}>
                <Image
                  width={200}
                  preview={false}
                  src={`${finalData?.image}`}
                />
              </div>
            </div>

            <div className="divider mt-3"></div>
            <div className="divider mt-1"></div>
            <div className="objective mt-3">
              <h3 style={{ backgroundColor: "gray", padding: 10 }}>
                Objective
              </h3>
              <hr />
              <p>{finalData?.careerObjective}</p>
            </div>
            <div className="divider mt-3"></div>

            <div className="education mt-3">
              <h3 style={{ backgroundColor: "gray", padding: 10 }}>
                Education
              </h3>
              <hr />
              {finalData?.education?.map((education) => {
                return (
                  <div className="d-flex align-items-center">
                    <h6 style={{ width: 120 }}>
                      <b>{education?.yearRange} : </b>
                    </h6>
                    <p>
                      <b>{education?.qualification}</b> with{" "}
                      <b>{education?.Percentage}</b> in {education?.institution}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="divider mt-3"></div>

            <div className="experience mt-3">
              <h3 style={{ backgroundColor: "gray", padding: 10 }}>
                Experience
              </h3>
              <hr />
              {finalData?.experience?.map((exp) => {
                return (
                  <div className="d-flex align-items-center">
                    <h6 style={{ width: 120 }}>
                      <b>{exp?.yearRange} : </b>
                    </h6>
                    <p>
                      <b>{exp?.company}</b> in <b>{exp?.place}</b>
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="divider mt-3"></div>

            <div className="projects mt-3">
              <h3 style={{ backgroundColor: "gray", padding: 10 }}>Projects</h3>
              <hr />
              {finalData?.projects?.map((project) => {
                return (
                  <div className="d-flex flex-column">
                    <h6>
                      <b>
                        {project?.title} [{project?.yearRange}]{" "}
                      </b>
                    </h6>
                    <p>{project?.rating}</p>
                  </div>
                );
              })}
            </div>

            <div className="divider mt-3"></div>

            <div className="projects mt-3">
              <h3 style={{ backgroundColor: "gray", padding: 10 }}>Skills</h3>
              <hr />
              {finalData?.skills?.map((skill) => {
                return <p>{skill?.technology}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template2;
