import { Provider } from "react-redux";
import React from "react";
import store from "../redux/store";

interface ProviderProps {
  children: any;
}
const Providers = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
