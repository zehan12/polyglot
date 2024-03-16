/*-------------------------------------------------------------------
|  🐼 React FC Layout
|
|  🐯 Purpose: RE-USEABLE LAYOUT TO BE USED IN NEXTJS PAGES
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AdvertisingLayout({ children }: Props) {
  return (
    <div>
      This is advertising Layout
      {children}
    </div>
  );
}
