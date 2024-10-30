import { createContext, SetStateAction, Dispatch } from "react";

interface ProductListData {
  sale: [];
  limited: [];
  best: [];
  allItems: [];
}

interface MenuContext {
  onHotSection: boolean;
  productList: ProductListData;
  setOnHotSection: Dispatch<SetStateAction<boolean>>;
  setProductsList: Dispatch<SetStateAction<ProductListData>>;
}

export const MenuContext = createContext<MenuContext | undefined>(undefined);
