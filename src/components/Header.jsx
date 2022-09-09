import React, {useState, useContext} from 'react';
import "@styles/Header.scss";
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import choppingCart from '@icons/icon_shopping_cart.svg';
import DesktopMenu from '@components/DesktopMenu';
import AppContext from '../context/AppContext';
import OrderList from '../containers/OrderList';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrderList, setToggleOrderList] = useState(false);
    const {state} = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleToggleOrderList = (event) => {
        event.preventDefault()
        setToggleOrderList(!toggleOrderList)
    }

    return (
        <nav className="navbar">
        <div className="nav-left">
            <img className="nav-left_menulogo" src={menu} alt="menu" />
            <img className="nav-left_logo" src={logo} alt="logo" />
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
                <li className="nav-right_menu" onClick={handleToggle}>
                    {state.email}
                </li>
                <li className="nav-right_cart" onClick={handleToggleOrderList}>
                    <a href="/">
                        <figure className="nav-right_icon">
                            <img src={choppingCart} alt="" />
                            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null  }
                        </figure>
                    </a>
                </li>
            </ul>
        </div>
        
        {toggle && <DesktopMenu />}
        {toggleOrderList && <OrderList />}
    </nav>
            

    );
}







export default Header;