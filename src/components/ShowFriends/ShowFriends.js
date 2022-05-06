import React from 'react';
import './ShowFriends.css'
const ShowFriends = (props) => {
    let { name, image, jod, location, salary } = props.desc
    return (
        <div >
            <div class="card  mb-3" className='full-card'>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={image} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body" >
                            <h3 class="card-title " className='title'>{name}</h3>
                            <h5 class="card-title " className='title'>{jod}</h5>
                            <h5 class="card-title " className='title'>{location}</h5>
                            <h5 class="card-title " className='title'>{salary}</h5>
                            <button className='btn-style' onClick={() => props.handleClick(props.desc)}>Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowFriends;