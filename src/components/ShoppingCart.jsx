import React, {useState} from 'react'
import products from '../products';

const PROD_PAGE = 'products';
const CART_PAGE = 'cart';

function ShoppingCart() {

    // Initially sets our site to the Product Page
    const [page, setPage] = useState(PROD_PAGE);

    const [cart, setCart] = useState(0)

    const [total, setTotal] = useState(0)

    // +++++++++++++++++++++CREATES PRODUCT PAGE VIEW+++++++++++++++++++

    // Structures our items on our product page
    const Prod = (props) => {
        return(
            <div className="item">
                <div className="top-item">
                <h3>{props.name}</h3>
                <h4>{props.price}</h4>
                </div>

                <div className="mid-item">
                    <p>{props.description}</p>
                </div>

                <div className="bottom-item">
                    <button onClick={() => setCart(currentCart => (
                        cart + 1
                    ))} >Add to Cart</button>
                </div>
            </div>
        )
    }

    // Creates the component for our Product Page
    const createProd = (product) => {
        return(
            <Prod 
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            />
        )
    }

    const [{items, price, total}, setCart] = useState({items: '', total: 0})

    // Renders Product Page
    const renderProd = () => {
        return(
            <div>
            <div className="products">
                <h1>Products</h1>
                <p>Items in Cart: ({cart}) </p>
                <p>Total: ({total}) </p>
            </div>
            <div className="grid">
                {products.map(createProd)}
            </div>
            <div className="checkout">
                <div>
                    <h1>Checkout</h1>
                </div>
                <div>
                    <p>
                        items: {items}
                        <br></br>
                        total: {total}
                        <br></br>
                        state taxes: {total * 0.08}
                        <br></br>
                        subtotal: {total + (total * 0.08)}
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
        )
    }




    // Renders it all!!!!
    return(
        <div>
            <button >Checkout </button>
            <button >Products</button>
            {page === PROD_PAGE && renderProd()}
        </div>
    )

}

export default ShoppingCart;
