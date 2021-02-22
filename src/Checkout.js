import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                className="checkout__add"
                src="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Coupons/infographic/1500x300._CB1198675309_.jpg"
                alt=""></img>
                {basket?.length == 0 ? (
                    <div>
                        <h2>Your Basket is empty</h2>
                        <p> To add some items to your basket, click "Add to Basket" button below the item you want to add.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title"> Your Shopping Basket</h2>
                        {/* List all selected items */}
                        {basket?.map((item) => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
