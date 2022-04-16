import React, { useState } from 'react'
import data from './data.js';
import "./lorem.css"

export default function Lorem() {
 
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

 const handleSubmit =(e)=>{
     e.preventDefault();
     let amount = parseInt(count);
     if (count <= 0){
         amount = 1;
     }
     if(count > 8){
         amount = 8;
     }
     setText(data.slice(0,amount))
 }

  return (
      <div className='bd'>
    <div className='section-center'>
       <h1 className='arun1'>TIRED OF BORING LOREM IPSUM?</h1> 
       <form onSubmit={handleSubmit}>
          <label>Paragraphs :</label> <input className='amount' type="number" name='amount' id='amount' value={count} onChange = {(e)=>
        setCount(e.target.value)}/>
        <button className='btn'>Generate</button>
       </form>
       <article>
           {
           text.map((item,index) => {
               return <p>{item}</p>
           })
        }
       </article>
    </div>
    </div>
  )
}
