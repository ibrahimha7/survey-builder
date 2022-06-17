import { Button, Form, Input, Modal, Row, Select, Space, Tabs } from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

interface IProps {
  addNewFields: (values: any) => void;
  visible: boolean;
  setVisibleModal: (value: boolean) => void;
  currentTypeCreated: "TEXT" | "MULTI_SELECT" | undefined;
}
function ModalForm({
  addNewFields,
  setVisibleModal,
  visible,
  currentTypeCreated,
}: IProps) {
  const [modalForm] = useForm();
  const hideModal = () => {
    setVisibleModal(false);
    modalForm.resetFields();
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <Modal
      visible={visible}
      onCancel={hideModal}
      onOk={() => modalForm.submit()}
    >
      <Form form={modalForm} onFinish={addNewFields} layout={"vertical"}>
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Main information" key="1">
            <Form.Item name="name" label="name">
              <Input placeholder="Please add name" />
            </Form.Item>
            <Form.Item name="labelEn" label="labelEn">
              <Input placeholder="Please add English Label" />
            </Form.Item>
            <Form.Item name="labelAr" label="labelAr">
              <Input placeholder="Please add Arabic Label" />
            </Form.Item>
          </TabPane>
          <TabPane tab="Rules" key="2">
            <Form.Item name="isRequired" label="name">
              <Select defaultValue={false}>
                <Select.Option value={false}>Not Required</Select.Option>
                <Select.Option value={true}>Required</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="isVisible" label="name">
              <Select defaultValue={true}>
                <Select.Option value={true}>Visible</Select.Option>
                <Select.Option value={false}>Not Visible</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="isRequiredIf"
              label="name"
              help={
                <>
                  <p>
                    Please add the field name that will be used to check if this
                    field is required ex.
                  </p>{" "}
                  <br />
                  <p style={{ fontWeight: "bold" }}> {`{name} == 'ahmad' `} </p>
                </>
              }
            >
              <Input placeholder="Please add Arabic Label" />
            </Form.Item>
            <Form.Item
              name="isVisibleIf"
              label="name"
              help={
                <>
                  <p>
                    Please add the field name that will be used to check if this
                    field is required ex.
                  </p>{" "}
                  <br />
                  <p style={{ fontWeight: "bold" }}> {`{name} == 'ahmad' `} </p>
                </>
              }
            >
              <Input placeholder="Please add Arabic Label" />
            </Form.Item>
          </TabPane>
          {currentTypeCreated === "MULTI_SELECT" && (
            <TabPane tab="Options" key="3">
              <Form.List name="options">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Row>
                        <Form.Item
                          {...restField}
                          name={[name, "value"]}
                          rules={[{ required: true, message: "Missing value" }]}
                        >
                          <Input placeholder="Adding value" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "labelEn"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing English Label",
                            },
                          ]}
                        >
                          <Input placeholder="English Label" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "labelAr"]}
                          rules={[
                            { required: true, message: "Missing Arabic Label" },
                          ]}
                        >
                          <Input placeholder="Arabic Label" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Row>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add field
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </TabPane>
          )}
        </Tabs>
      </Form>
    </Modal>
  );
}

export default ModalForm;
