import { createContext, SetStateAction, Dispatch } from "react";

interface MenuContext {
  onHotSection: boolean;
  setOnHotSection: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContext | undefined>(undefined);
