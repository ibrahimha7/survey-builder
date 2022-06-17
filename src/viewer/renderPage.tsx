import { FormInstance } from "antd";
import React from "react";
import { IPage } from "../builder/interfaces";
import RenderQuestions from "./renderQuastion";

interface IProps {
  page: IPage;
  form: FormInstance;
}
function RenderPage({ page, form }: IProps) {
  const { elements } = page;
  return (
    <>
      {elements &&
        elements.length > 0 &&
        elements.map((element, index) => {
          //   console.log("required if", element.isRequiredIf);
          //   console.log("visable if", element.isVisibleIf);

          return (
            <RenderQuestions
              Field={element}
              language="en"
              required={element.isRequired || false}
              visible={element.isVisible || true}
            />
          );
        })}
    </>
  );
}

export default RenderPage;
