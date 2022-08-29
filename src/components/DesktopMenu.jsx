import React from "react";
import '@styles/DesktopMenu.scss'

const DesktopMenu = () => {
  return (
    <div class="DesktopMenu">
      <ul class="DesktopMenu_ul">
        <li>
          <a href="">My orders</a>
        </li>
        <li>
          <a href="">My account</a>
        </li>
        <li>
          <a href="">sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
