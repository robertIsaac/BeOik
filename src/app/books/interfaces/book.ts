export interface Book {
  bookId: number;
  nameAr: string;
  nameEn: string;
  bookAuthorId: number;
  catagoryId: number;
  physicalName: string;
  shortDescripAr: string;
  shortDescripEn: string;
  longDescripAr: string;
  longDescripEn: string;
  downloadsCount: number;
  image: string;
  rating: number;
  showOnHomeSlider: boolean;
  isDeleted: boolean;
  createdBy: number;
  creationDate: string;
  modifiedBy: number;
  modifiecationDate: string;
  bookAuthor: null;
  catagory: null;
  createdByNavigation: null;
  modifiedByNavigation: null;
  booksRatings: [];
}
