export const initialState = {
    basket: [
        {id :'12345',
        title:'Acer Predator Helios 300 Gaming Laptop.',
        price:11.6,
        rating:5,
        image:'https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SX679_.jpg'
    },

    {id :'12345',
    title:'Acer Predator Helios 300 Gaming Laptop.',
    price:11.6,
    rating:5,
    image:'https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SX679_.jpg'
}
    ],
    user: null
};
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer (state, action) {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET' :
            //Logic for Add data
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            
        case 'REMOVE_FROM_BASKET':
            //Logic for Removing data

            //We clone the basket
            let newBasket = [...state.basket];

            //We check to see if product exists,
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //Item exits in basket remove it...
                newBasket.splice(index, 1)
            }
            else{
                console.warn(
                    `Can't remove product (id: ${action.id})`
                );
            }
            return {
                ...state,
                basket: newBasket,
            }
        default:
            return state
    }
};

export default reducer;