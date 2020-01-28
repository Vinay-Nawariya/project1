import React from "react";

const Chat = (props)=>{
    return(
        <div className='box'>
            <div className='chatbox'>
                {props.dd}
           </div>
           <input type='text' placeholder='Talk To Us...' className='input-bx-msg' dd={props.dd} onChange={props.onchange}/>
    {/* <h1>{props.inputdata}</h1> */}
        </div>
    )
}

export default Chat;