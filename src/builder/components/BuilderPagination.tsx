import { Row, Col, Select, Space, Button } from "antd";
import React, { useState, useEffect } from "react";
import { IPage } from "../interfaces";
import { usePages } from "../useService";

interface IProps {
  currentPage: IPage;
  setCurrentPage: (value: IPage) => void;
}
function BuilderPagination({ currentPage, setCurrentPage }: IProps) {
  const { pages, status } = usePages();

  if (status !== "success") {
    return <p>loading..</p>;
  }

  return (
    <Row justify="end">
      <Col span={4}>
        <Select
          placeholder="select page to edit"
          value={currentPage.order}
          onChange={(value: number) => {
            const currentPageByOrder = pages.find(
              (page: IPage) => page.order === value
            );
            setCurrentPage(currentPageByOrder);
          }}
        >
          {pages &&
            pages?.length > 0 &&
            pages.map((page: IPage) => (
              <Select.Option key={page.order} value={page.order}>
                {page.order}
              </Select.Option>
            ))}
        </Select>
      </Col>
    </Row>
  );
}

export default BuilderPagination;
