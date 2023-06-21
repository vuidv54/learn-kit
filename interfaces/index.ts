export interface ICourse {
  title: string;
  description: string;
  logo: React.ReactNode;
}

export type TListCourse = ICourse[];

export interface IPopularCourse {
  title: string;
  imagePath: string;
  description: string;
}

export type TPopularListCourse = IPopularCourse[];

export interface IMember {
  name: string;
  detail: string;
  imgPath: string;
}

export type TListMember = IMember[];

export interface INewsItem {
  imgPath: string;
  title: string;
  description: string;
  viewQuantity: number;
}

export type TListNews = INewsItem[];
