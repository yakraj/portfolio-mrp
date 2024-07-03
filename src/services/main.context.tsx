import { ReactNode, createContext } from "react";

export const MainContext = createContext("");

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
export const MainProvider = ({ children }: Props) => {
  return <MainContext.Provider value="hello">{children}</MainContext.Provider>;
};
