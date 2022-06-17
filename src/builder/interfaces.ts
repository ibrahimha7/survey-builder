export interface ISurvey {
  status: "PUBLISH" | "INPROGRESS" | "DRAFT";
  id: number;
  name: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  logo: string;
  background: string;
  mode: "light" | "dark";
  mainColor: string;
  secondaryColor: string;
  layout: "layout_1" | "layout_2" | "layout_3" | "layout_4";
  pages: IPage[];
}
export interface IPage {
  id: number;
  order: number;
  name: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  elements: IField[];
}
export interface IField {
  id: string;
  name: string;
  type: "TEXT" | "MULTI_SELECT";
  isRequired?: boolean;
  isRequiredIf?: string;
  isVisible?: boolean;
  isVisibleIf?: string;
  labelEn: string;
  labelAr: string;
  options?: IOptions[];
}

export interface IOptions {
  id: string;
  value: string;
  labelEn: string;
  labelAr: string;
}
