import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { ISurvey } from "../builder/interfaces";
import RenderMultiplePages from "./renderMultiplePages";
import RenderPage from "./renderPage";

interface IProps {
  survey: ISurvey;
  language: "en" | "ar";
}
function RenderMainForm({ language, survey }: IProps) {
  const { pages } = survey;
  const [mainForm] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("values", values);
  };

  if (pages.length === 0) {
    return <div>No pages</div>;
  }

  return (
    <>
      <Form form={mainForm} onFinish={handleSubmit} layout={"vertical"}>
        {pages.length === 1 ? (
          <>
            <RenderPage page={pages[0]} form={mainForm} />

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </>
        ) : (
          <RenderMultiplePages
            language={language}
            survey={survey}
            form={mainForm}
          />
        )}
      </Form>
    </>
  );
}

export default RenderMainForm;
