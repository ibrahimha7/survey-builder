import { Table } from "antd";
import React, { useCallback, useEffect, useRef } from "react";
import { IField } from "../interfaces";
import update from "immutability-helper";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DraggableBodyRow } from "../helper/dragbaleTable";

interface IProps {
  listOfFields: IField[];
  setListOfFields: (values: IField[]) => void;
}
function BuilderTable({ listOfFields, setListOfFields }: IProps) {
  const columns = [
    {
      title: "name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "labelEn",
      key: "labelEn",
      dataIndex: "labelEn",
    },
    {
      title: "labelAr",
      key: "labelAr",
      dataIndex: "labelAr",
    },
    {
      title: "type",
      key: "type",
      dataIndex: "type",
    },
  ];

  const components = {
    body: {
      row: DraggableBodyRow,
    },
  };

  const moveRow = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragRow = listOfFields[dragIndex];
      setListOfFields(
        update(listOfFields, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        })
      );
    },
    [listOfFields]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Table
        pagination={false}
        columns={columns}
        dataSource={listOfFields}
        components={components}
        onRow={(_, index) => {
          const attr = {
            index,
            moveRow,
          };
          return attr as React.HTMLAttributes<any>;
        }}
      />
    </DndProvider>
  );
}

export default BuilderTable;
