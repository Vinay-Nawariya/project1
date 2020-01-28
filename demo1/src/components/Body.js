import React from 'react';
import Chat from './Chat';

const Body = (props) =>{
    return(
        <div className='body-container'>
            <Chat dd={props.dd} onchange={props.onchange}/>
        </div>
    )
}

export default Body;