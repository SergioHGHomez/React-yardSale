import React, {useContext} from 'react';
import '../styles/OrderList.scss';
import Order from '../components/Order';
import AppContex from '../context/AppContext';


const OrderList = () => {
  const {state} = useContext(AppContex)
  const date = new Date();
  let day = date.getDay()
  let month = date.getMonth()
  let year = date.getFullYear()
  const sumTotal = () => {
    const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

    return(
        <section className="orderList">
        <div className="orderList-list">
          <h1 className="orderList-list_h1">My orderList</h1>
          <div className="orderList-list_info">
            <div>
              <p className="info_date">{day}.{month}.{year}</p>
              <p className="info_articles">{state.cart.length} Awesome products!!!</p>
            </div>
            <p className="info_total">$ {sumTotal()}</p>
          </div>
          { state.cart.map((item) => (<Order product={item} key={`product-${item.id}`} />))}
          
        </div>
        <button className="orderList-checkout_button">check out</button>
      </section>
    );

}

export default OrderList;