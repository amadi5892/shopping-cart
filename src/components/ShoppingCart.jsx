import React, {useState,Component} from 'react';

function Header(props) {
    return (
        <h1>Shopping Cart</h1>
    )
}

function Items(props) {


    return (
        <div>
            <div>
            <table>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Add</th>
            <th>Remove</th>
            {
                props.products.map(item=>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td><button onClick={() => item.quantity + 1} >+</button></td>
                    </tr>)
                    
            }  
            </table>
            </div>
           <p></p>
        </div>
        
    )
        }

        function Footer(props) {
            return(
                <div>
                    <h2>{props.total}</h2>
                </div>
            )
        }

        

        
class ShoppingCart extends Component {
    
    constructor() {
        super()
        this.state = {
            // cart: this.getCart()
        }
    }
    

    render() {
        const products = [
            {
                id: 1,
                name: "Tshirt",
                price:35,
                quantity: 1
            },
            {
                id: 2,
                name: "Hoodie",
                price: 45,
                quantity: 1
            }
        ]
    
        return (
            <div>
            <div>
                <Header />
                <Items 
                key={products.id}
                products={products}/>
                <Footer total={products.reduce((a,c) => (a + c.price * c.quantity), 0)} />
            </div>
        </div>
        )
    }
}

export default ShoppingCart;