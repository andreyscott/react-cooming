import React, { ReactNode } from "react";
import Helmet from "react-helmet";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children, }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center overflow-hidden w-full h-full items-center bg-hero bg-cover">
    <Helmet>
      <title>
   Abacus -  A Clean Coming Soon Page created by andrey-profile.web.app
       | Andrew Irorere</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="A  Lading Page build with Tailwind CSS and NextJs created by Andrew Irorere"
      />
      <meta property="og:title" content={`$
   Abacus -  A Clean Coming Soon Page created by andrey-profile.web.app  | Andrew Irorere`} />
      <meta
        property="og:description"
        content="A   Lading Page build with Tailwind CSS and NextJs created by Andrew Irorere"
      />
      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
    </Helmet>
    {children}
  </div>
);

export default Layout;
