import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { IPage, ISurvey } from "./interfaces";

const URL = "http://localhost:4000";

export const usePages = () => {
  const { data, status } = useQuery("pages", () => {
    return axios.get(`${URL}/pages`);
  });

  const pages = data?.data || [];
  return { pages, status };
};

export const usePage = () => {
  const mutation = useMutation((page: IPage) => {
    return axios.put(`${URL}/pages/${page.id}`, page);
  });

  return { mutation };
};

export const useSurveyById = (id: string) => {
  const { data, status } = useQuery("survey" + id, () => {
    return axios.get(`${URL}/surveys/${id}`);
  });

  const survey: ISurvey = data?.data || {};
  return { survey, status };
};
