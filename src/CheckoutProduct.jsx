import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'
import StarIcon from '@material-ui/icons/Star';

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    console.log(id, title)
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })

    }
    return (
        <div className='checkout_product'>
            <img className='checkoutProduct_img' src={image} alt=""/>

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'> {title} </p>
                <p className='checkoutProduct_price'>
                <small>$</small>
                <strong> {price} </strong>
                </p>
                <div className="product_rating">
                {Array(rating).fill().map((_) => (
                    <p className='star'> <StarIcon /> </p>
                ))}
            </div>
            <button onClick={removeFromBasket}> Remove from basket</button>
            </div>
            
            </div>
        
    )
}

export default CheckoutProduct
