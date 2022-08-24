import React from 'react'
import "../styles/Header.scss"

const Header = () => {
    return (
        <nav className="navbar">
        <div className="nav-left">
            <img className="nav-left_menulogo" src="Platzi_YardSale_Icons/icon_menu.svg" alt="menu" />
            <img className="nav-left_logo" src="Platzi_YardSale_Logos/logo_yard_sale.svg" alt="logo" />
            <ul className="nav-left_list">
                <li className="nav-left_item">
                    <a href="/">ALL</a>
                </li>
                <li className="nav-left_item">
                    <a href="/">Clothes</a>
                </li>
                <li className="nav-left_item">
                    <a href="/">Furniture</a>
                </li>
                <li className="nav-left_item">
                    <a href="/">Toys</a>
                </li>
                <li className="nav-left_item">
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>

        <div className="nav-right">
            <ul className="nav-right_list">
                <li className="nav-right_menu">user@mail.com</li>
                <li className="nav-right_cart" >
                    <a href="/">
                        <figure className="nav-right_icon">
                            <img src="/Platzi_YardSale_Icons/icon_shopping_cart.svg" alt="" />
                            <div>2</div>
                        </figure>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    );
}

export default Header;