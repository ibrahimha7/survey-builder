import { Button, Col, Divider, message, Row, Steps } from "antd";
import { FormInstance, useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import { IPage, ISurvey } from "../builder/interfaces";
import RenderPage from "./renderPage";

const { Step } = Steps;

interface IProps {
  survey: ISurvey;
  language: "en" | "ar";
  form: FormInstance;
}
function RenderMultiplePages({ survey, language, form }: IProps) {
  const { pages } = survey;
  const [current, setCurrent] = useState(0);

  const next = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("values", values);
        setCurrent(current + 1);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Row justify="center">
        <Col span={22}>
          <Steps current={current}>
            {pages.map((page: IPage, index) => {
              const { titleAr, titleEn, descriptionEn, descriptionAr } = page;
              return (
                <Step
                  title={language === "en" ? titleEn : titleAr}
                  description={
                    language === "en" ? descriptionEn : descriptionAr
                  }
                />
              );
            })}
          </Steps>
          <Divider />
        </Col>
      </Row>

      <Row justify="center" style={{ minHeight: "40vh" }}>
        <Col span={22}>
          <RenderPage page={pages[current]} form={form} />
        </Col>
      </Row>

      <Row justify="end">
        <Col span={current > 0 ? 4 : 3}>
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < pages.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === pages.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
}

export default RenderMultiplePages;
