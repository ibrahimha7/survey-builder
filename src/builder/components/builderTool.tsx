import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import BuilderTable from "./builderTable";
import update from "immutability-helper";
import { IField, IPage } from "../interfaces";
import { usePage } from "../useService";
import ModalForm from "./ModalForm";

interface IProps {
  currentPage: IPage;
  pages: IPage[];
  setPages: (values: any) => void;
}
function BuilderTool({ currentPage, pages, setPages }: IProps) {
  const [listOfFields, setListOfFields] = useState<IField[]>([]);
  const [currentTypeCreated, setCurrentTypeCreated] = useState<
    "TEXT" | "MULTI_SELECT"
  >();
  const [visibleModal, setVisibleModal] = useState(false);
  const { mutation } = usePage();

  const showModal = () => {
    setVisibleModal(true);
  };

  const addNewFields = (values: any) => {
    values.type = currentTypeCreated;
    setListOfFields(
      update(listOfFields, {
        $push: [values],
      })
    );
  };

  const updatePage = () => {
    const updatedPage = update(currentPage, {
      $set: {
        name: currentPage.name,
        elements: listOfFields,
        order: currentPage.order,
        id: currentPage.id,
      },
    });
    mutation.mutate(updatedPage);

    console.log("updating page with", updatedPage);
  };

  useEffect(() => {
    setListOfFields(currentPage.elements);
  }, [currentPage]);

  return (
    <>
      <Row>
        <Col span={8}>
          <Card title="component" bordered={false}>
            <Space>
              <Button
                onClick={() => {
                  showModal();
                  setCurrentTypeCreated("TEXT");
                }}
              >
                Text
              </Button>
              <Button
                onClick={() => {
                  showModal();
                  setCurrentTypeCreated("MULTI_SELECT");
                }}
              >
                Multi select
              </Button>
            </Space>
          </Card>
        </Col>
        <Col span={16}>
          <Card
            title="Builder"
            bordered={false}
            extra={
              <Button
                type="primary"
                onClick={() => {
                  updatePage();
                }}
              >
                save
              </Button>
            }
          >
            <BuilderTable
              listOfFields={listOfFields}
              setListOfFields={setListOfFields}
            />
          </Card>
        </Col>
      </Row>

      <ModalForm
        addNewFields={addNewFields}
        setVisibleModal={setVisibleModal}
        visible={visibleModal}
        currentTypeCreated={currentTypeCreated}
      />
    </>
  );
}

export default BuilderTool;
