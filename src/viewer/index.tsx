import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSurveyById } from "../builder/useService";
import LayoutOne from "./layout/layoutOne";

function Viewer() {
  const { id } = useParams();
  const { status, survey } = useSurveyById(id || "1");

  useEffect(() => {
    console.log("survey", survey);
  }, [survey]);

  if (status !== "success") {
    return <p>loading...</p>;
  }

  switch (survey.layout) {
    case "layout_1":
      return <LayoutOne survey={survey} language="en" />;
    default:
      return <LayoutOne survey={survey} language="en" />;
  }
}

export default Viewer;
