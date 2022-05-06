import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    // let { name } = props.cart
    return (
        <div>
            <h1>Friends Description</h1>
            {
                props.cart.map(pr => <div>
                    <div className='card'>
                        <div>
                            <img src={pr.image} alt="" className='sideImg' />
                        </div>
                        <div>
                            <h1>{pr.name}</h1>
                            <p>Salary: {pr.salary}</p>
                            <p>Job: {pr.jod}</p>
                        </div>
                    </div>
                </div>)


            }
        </div>
    );
};

export default Cart;