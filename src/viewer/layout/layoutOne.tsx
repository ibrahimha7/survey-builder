import { Card, Col, Image, Row, Typography } from "antd";
import React from "react";
import { ISurvey } from "../../builder/interfaces";
import RenderMainForm from "../renderMainForm";

interface IProps {
  survey: ISurvey;
  language: "en" | "ar";
}
function layoutOne({ survey, language }: IProps) {
  const {
    id,
    background,
    descriptionAr,
    descriptionEn,
    logo,
    mainColor,
    name,
    secondaryColor,
    titleAr,
    titleEn,
    mode,
    pages,
  } = survey;

  return (
    <div style={{ background, height: "100vh", padding: "2rem 4rem" }}>
      <Row justify="start">
        <Col span={4}>
          <Image src={logo} />
        </Col>
      </Row>

      {(titleAr || titleEn) && (
        <Row justify="start">
          <Col span={12}>
            <h1>{language === "en" ? titleEn : titleAr}</h1>
          </Col>
        </Row>
      )}
      {(descriptionAr || descriptionEn) && (
        <Row justify="start">
          <Col span={12}>
            <h1>{language === "en" ? descriptionEn : descriptionAr}</h1>
          </Col>
        </Row>
      )}

      <Row justify="center">
        <Col span={20}>
          <Card
            bordered={false}
            style={{
              borderRadius: "10px",
              backgroundColor: mode === "light" ? "white" : "dark",
              minHeight: "60vh",
            }}
          >
            <RenderMainForm language="en" survey={survey} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default layoutOne;
