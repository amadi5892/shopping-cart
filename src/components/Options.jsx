import React, {useState} from 'react';
import products from '../products';

function Options() {

    const theCart = [cart, setCart] = useState([]);

    const toCart = (products) => {
        setCart([...cart, {...products}]);
    }
    console.log(cart)
    

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
                    <button onClick={() => toCart(products)} >Add to Cart</button>
                </div>
            </div>
        )
    };

    const createProd = (product) => {
        return(
            <div>
                <Prod 
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            />
            </div>
            
        )
    }; 

    return(
        <div>
            <div>
                <h1>Products</h1>
                <p>Items in Cart: ({cart.length})</p>
            </div>
            <div className="grid">
                {products.map(createProd)}
            </div>
        </div>
    )
}

export default Options;