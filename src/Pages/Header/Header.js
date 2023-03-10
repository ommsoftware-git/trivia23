import React from "react";
import "./header.css";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { menuBar } from "./data";
const Header = () => {
  const location = useLocation();
  return (
    <div id="home">
      <header
        style={{ zIndex: "1000 !important" }}
        className="page_header header_white toggler_right"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 display_table">
              <div className="header_left_logo display_table_cell">
                <a href="/" className="logo top_logo">
                  <img src="https://i.ibb.co/Sd8xhC2/trans23jpg.jpg" alt="" />
                </a>
              </div>

              <div className="header_mainmenu display_table_cell text-right">
                <nav className="mainmenu_wrapper">
                  <ul className="mainmenu nav sf-menu">
                    {menuBar.map((menu) => {
                      const isActive = location.pathname === menu.path;
                      return (
                        <>
                          <li className={`${isActive && "active"}`}>
                            <Link to={menu.path} className={menu.className}>
                              {menu.name}
                            </Link>
                          </li>
                        </>
                      );
                    })}
                    <li>
                      <Link class="animated-arrow frenches-btn " to="singUp">
                        <span class="the-arrow -left">
                          <span class="shaft"></span>
                        </span>
                        <span class="main">
                          <span class="text">FRANCHISES REGISTER</span>
                          <span class="the-arrow -right">
                            <span class="shaft"></span>
                          </span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>

                <span className="toggle_menu">
                  <span></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
