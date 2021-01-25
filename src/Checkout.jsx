import React from 'react'
import './Checkout.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import CardBanner from '../src/images/credit.png'

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
            <img className='credit_card' src={CardBanner} alt=""/>
            
            {basket?.length === 0 ? (
               <div> 
                    <h2>Your Shopping basket is empty</h2> 
                    <p>You have no items in your basket. To buy one or more items, 
                        click "Add to Basket" next to the icon...</p>
                </div>
            ) : (
                <div> 
                    <h2 className='checkout_title'> Your Shopping basket </h2>

                    {/* List out all of the checkout products */}
                    {basket.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating} />
                    ))}
                    
                </div> 
            

            )}
        </div>

        {basket.length > 0 && (
            <div className="checkout_right">
                <Subtotal />
            </div>
        )}
        </div>
    )
}

export default Checkout;
