export interface Article {
  articleId: number;
  catagoryId: number;
  titleEn: string;
  titleAr: string;
  shortDescripAr: string;
  shortDescripEn: string;
  image: string;
  numberOfViews: null;
  showOnHomeSlider: boolean;
  rating: null;
  isActive: boolean;
  isDeleted: boolean;
  createdBy: null;
  creationDate: string;
  modifiedBy: null;
  modifiecationDate: string;
  catagory: null;
  articlesRatings: [];
  articlesSections: [];
}
