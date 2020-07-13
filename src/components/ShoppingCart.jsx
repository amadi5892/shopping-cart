import React, {useState} from 'react'
import products from '../products';

const PROD_PAGE = 'products';
const CART_PAGE = 'cart';

function ShoppingCart() {
    // Initially sets our site to the Product Page
    const [page, setPage] = useState(PROD_PAGE);

    // +++++++++++++++++++++CREATES PRODUCT PAGE VIEW+++++++++++++++++++

    // Structures our items on our product page
    const Prod = () => {
        return(
            <div className="item">
                <div className="top-item">
                <h3>Name</h3>
                <h4>Price</h4>
                </div>

                <div className="mid-item">
                    <p>Description</p>
                </div>

                <div className="bottom-item">
                    <button /*onClick={() => toCart(products)}*/ >Add to Cart</button>
                </div>
            </div>
        )
    }

    // Creates the component for our Product Page
    const createProd = () => {
        return(
            <Prod />
        )
    }

    // Renders Product Page
    const renderProd = () => {
        return(
            <div>
            <div>
                <h1>Products</h1>
                <p>Items in Cart: ()</p>
            </div>
            <div className="grid">
                {products.map(createProd)}
            </div>
        </div>
        )
    }

    // +++++++++++++++++++++CREATES CART PAGE VIEW+++++++++++++++++++++

    // Structures our Cart items...HOPEFULLY
    const Cart = () => {
        return(
            <div>

            </div>
        )
    }

    // Creates the components for our Cart Page
    const createCart = () => {
        return(
            <Cart />
        )
    }

    // Renders Cart Page
    const renderCart = () => {
        return(
            <div>
                <div>
                    <h1>Cart</h1>
                </div>
            </div>
        )
    }

    // Sends us from page to page
    const toCart = (nextPage) => {
        setPage(nextPage)
    }

    // Renders it all!!!!
    return(
        <div>
            <button onClick={() => toCart(CART_PAGE)} >Cart</button>
            <button onClick={() => toCart(PROD_PAGE)} >Products</button>
            {page === PROD_PAGE && renderProd()}
            {page === CART_PAGE && renderCart()}
        </div>
    )
}

export default ShoppingCart;
