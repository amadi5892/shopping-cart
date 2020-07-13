import React, {useState} from 'react'
import Basket from './Basket';
import Options from './Options';

const PROD_PAGE = 'products';
const CART_PAGE = 'cart'; // naming this Basket

function ShoppingCart() {
    const [page, setPage] = useState(PROD_PAGE);

    const toCart = (nextPage) => {
        setPage(nextPage)
    }

    const renderCart = () => {
        return(
            <Basket />
        )
    }

    const renderProd = () => {
        return(
            <Options />
        )
    }

    return (
        <div>
            <button onClick={() => toCart(CART_PAGE)} >Cart</button>
            <button onClick={() => toCart(PROD_PAGE)} >Prodcuts</button>
            {page === PROD_PAGE && renderProd()}
            {page === CART_PAGE && renderCart()}
        </div>
    )
}

export default ShoppingCart;
