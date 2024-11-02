import { createContext, SetStateAction, Dispatch } from "react";

interface ProductItemType {
  _id: string;
  name: string;
  price: string;
  category: string;
  specialty: string;
  availability: string;
  img: string;
}

interface ProductListData {
  sale: ProductItemType[];
  limited: ProductItemType[];
  best: ProductItemType[];
  allItems: ProductItemType[];
}

interface MenuContext {
  onHotSection: boolean;
  productList: ProductListData;
  category: string;
  isOrderTabVisible: boolean;
  setOnHotSection: Dispatch<SetStateAction<boolean>>;
  setProductsList: Dispatch<SetStateAction<ProductListData>>;
  setCategory: Dispatch<SetStateAction<string>>;
  setIsOrderTabVisible: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContext | undefined>(undefined);
