import { ReactNode } from "react";

import { Header } from "../ui/header/header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
