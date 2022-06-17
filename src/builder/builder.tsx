import BuilderTool from "./components/builderTool";
import BuilderPagination from "./components/BuilderPagination";
import { useEffect, useState } from "react";
import { IPage } from "./interfaces";

function Builder() {
  const [currentPage, setCurrentPage] = useState<IPage>({
    name: "page1",
    order: 1,
    id: 1,
    elements: [],
  });

  const [pages, setPages] = useState<IPage[]>([
    {
      name: "page1",
      order: 1,
      id: 1,
      elements: [],
    },
  ]);

  useEffect(() => {
    console.log("current page has changed to", currentPage);
  }, [currentPage]);

  useEffect(() => {
    console.log("pages", pages);
  }, [pages]);

  return (
    <>
      <BuilderPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <BuilderTool
        currentPage={currentPage}
        pages={pages}
        setPages={setPages}
      />
    </>
  );
}

export default Builder;
