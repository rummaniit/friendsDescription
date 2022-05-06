import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowFriends from '../ShowFriends/ShowFriends';
// import ShowFriends from '../ShowFriends/ShowFriends';
import './FetchFriends.css'
// import ShowFriends from '../ShowFriends/ShowFriends';


const FetchFriends = () => {
    let [descriptions, setDescriptions] = useState([])
    let [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setDescriptions(data))
    }, [])
    const handleClick = (friends) => {
        const newCart = [...cart, friends]
        setCart(newCart)
    }
    return (
        <div>
            <div className='grid'>
                <div className="friends">

                    {
                        descriptions.map(des => <ShowFriends
                            key={des.name}
                            desc={des}
                            handleClick={handleClick}
                        ></ShowFriends>)
                    }
                </div>

                <div className="friends-count">
                    <Cart
                        cart={cart}>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default FetchFriends;