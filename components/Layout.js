import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import ThemeContext from "../context/ThemeContext";
class Layout extends React.Component {
  state = {
    darkTheme: false
  };

  componentDidMount() {
    const theme = localStorage.getItem("darkTheme");
    if (theme) {
      this.setState({
        darkTheme: theme == "true" ? true : false
      });
    } else {
      localStorage.setItem("darkTheme", this.state.darkTheme);
    }
  }
  componentDidUpdate() {
    localStorage.setItem("darkTheme", this.state.darkTheme);
  }

  setDarkTheme = () => {
    this.setState({
      darkTheme: !this.state.darkTheme
    });
  };
  render() {
    return (
      <Fragment>
        <div
          className={`h-full  ${
            this.state.darkTheme ? `dark-theme` : `light-theme`
          } bg-background-primary text-content-primary`}
        >
          <div className="bg-background-secondary h-20 flex flex items-center justify-between ">
            <div className="text-2xl mx-5 cursor-pointer hover:text-content-secondary text-content-primary">
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <div className="text-2xl mx-5 cursor-pointer hover:text-content-secondary text-content-primary">
                <Link href="/blogs">
                  <a>Blogs</a>
                </Link>
              </div>
              <div className="text-2xl mx-5 cursor-pointer hover:text-content-secondary text-content-primary">
                Contact
              </div>
              <div className="cursor-pointer mx-5" onClick={this.setDarkTheme}>
                {this.state.darkTheme ? (
                  <IoIosSunny
                    size="2em"
                    className=" hover:text-content-secondary text-content-primary"
                  />
                ) : (
                  <IoIosMoon size="2em" />
                )}
              </div>
            </div>
          </div>
          <ThemeContext.Provider value={this.state.darkTheme}>
            <main className="">{this.props.children}</main>
          </ThemeContext.Provider>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
