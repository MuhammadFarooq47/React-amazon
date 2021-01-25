import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';


function Header() {
    const [{basket}] = useStateValue();
    console.log(basket)
    return (
        <nav className='header'>

            <Link to='/'>
            <img className='header_logo' 
            src='https://www.jing.fm/clipimg/full/81-815835_amazon-logo-png-amazon-logo-white.png' 
            alt='amazon_logo' />
            </Link>
            <div className='header_search'>
            <input type='text' className='header_searchBar' />
            <SearchIcon className='header_searchIcon' />
            </div>

            <div className='header_nav'>
                {/* 1st link */}
            <Link to='/login' className='header_link'>
            <div className='header_option'>
                <span className='header_optionLineOne'> Hello User </span>
                <span className='header_optionLineTwo'> Sign in </span>
            </div>
            </Link>
                 {/* 2nd link */}
            <Link to='/' className='header_link'>
            <div className='header_option'>
                <span className='header_optionLineOne'> Returns </span>
                <span className='header_optionLineTwo'> & Orders </span>
            </div>
            </Link>
                {/* 3rd link */}
            <Link to='/' className='header_link'>
            <div className='header_option'>
                <span className='header_optionLineOne'> Your </span>
                <span className='header_optionLineTwo'> Prime </span>
            </div>
            </Link>
               
          
            </div>
            
             {/* 4th link */}
             
            <Link to='/checkout' className='header_link'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header_optionLineTwo header_basketCount'> {basket?.length} </span>
                </div>
            </Link>
            
            
        </nav>
    )
}

export default Header
