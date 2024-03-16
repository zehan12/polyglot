/*-------------------------------------------------------------------
|  🐼 React FC Layout
|
|  🐯 Purpose: RE-USEABLE LAYOUT TO BE USED IN NEXTJS PAGES
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

type Props = {
  children: React.ReactNode;
};

export default function AdvertisingLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
