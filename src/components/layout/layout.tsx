import { ReactNode } from "react";

import Header from "../ui/header/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
