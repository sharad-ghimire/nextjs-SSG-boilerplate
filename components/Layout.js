import React, { Fragment } from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="navbar-bg h-20 flex flex items-center justify-between">
        <div className="text-2xl text-gray-400 mx-5 cursor-pointer hover:text-gray-100">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <div className="text-2xl text-gray-400 mx-5 cursor-pointer hover:text-gray-100">
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </div>
          <div className="text-2xl text-gray-400 mx-5 cursor-pointer hover:text-gray-100">
            Contact
          </div>
        </div>
      </div>
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
