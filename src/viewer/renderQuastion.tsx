import { Form, Input, Select } from "antd";
import { FormInstance } from "rc-field-form";
import React from "react";
import { IField, IOptions } from "../builder/interfaces";

interface IProps {
  Field: IField;
  language: "en" | "ar";
  visible: boolean;
  required: boolean;
}
function RenderQuestions({ Field, language, visible, required }: IProps) {
  const { type, labelAr, labelEn, options, name } = Field;

  return (
    <Form.Item
      name={name}
      label={language === "en" ? labelEn : labelAr}
      rules={[{ required, message: "This field is required" }]}
    >
      {type === "TEXT" ? (
        <Input
          placeholder={
            language === "en"
              ? `Please input ${labelEn}`
              : `الرجاء ادخال ${labelAr}`
          }
        />
      ) : type === "MULTI_SELECT" ? (
        <Select
          placeholder={
            language === "en"
              ? `Please select ${labelEn}`
              : `الرجاء اختيار ${labelAr}`
          }
        >
          {options &&
            options.length > 0 &&
            options?.map((option: IOptions, index) => (
              <Select.Option key={index} value={option.value}>
                {language === "en" ? option.labelEn : option.labelAr}
              </Select.Option>
            ))}
        </Select>
      ) : null}
    </Form.Item>
  );
}

export default RenderQuestions;
