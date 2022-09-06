import React from "react";
import '@styles/DesktopMenu.scss'

const DesktopMenu = () => {
  return (
    <div className="DesktopMenu">
      <ul className="DesktopMenu_ul">
        <li>
          <a href="">My orders</a>
        </li>
        <li>
          <a href="">My account</a>
        </li>
        <li>
          <a href="/login">sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
