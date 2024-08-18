export interface StoreCreateModel {
  name: string;
  description: string;
  address: string;
  phoneNumber: string;
  storeManagerEmail: string;
  storeManagerPassword: string;
  coverImageFile: any;
  storeImageFile: any;
}
export interface StoreLiteModel {
  id: number;
  name: string;
  category: string;
  storeImage: string;
}
