import React from 'react';
import '@styles/Order.scss';

const Orders = () => {

    return(
        <section className="order">
        <div className="order-list">
            <h1 class="order-list_h1">My order</h1>
            <div class="order-list_info">
                <div>
                    <p class="info_date">04.25.2021</p>
                    <p class="info_articles">2 articles</p>

                </div>
                <p class="info_total">$ 2.500.000</p>
            </div>
            <div class="order-list_card">
                <div class="card_item">
                    <img class="order-list_img" src="https://images.pexels.com/photos/1367202/pexels-photo-1367202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="camera" />
                    <p class="order-list_name">sony camera </p>
                </div>
                <p class="order-list_price">$ 500.000</p>

            </div>
            
        </div>

    </section>
    );
}

export default Orders;