import React, { useState } from 'react'
import './cal.css'

const Cal = () => {

    const [b,setb]=useState('0')

    const numClick=(e)=>{
        const valueSelected = e.target.innerText
        console.log(valueSelected)
        if(b==0 || b === '0' || b ==='00' || b==='0.' ){
            if(valueSelected ==='.'){
                setb('0.')
            } else {
                setb(valueSelected)
            }
            
        } 
        else if(valueSelected === '.'){
            if(b.includes('.')){
                return
            } else {
                setb(b+valueSelected)
            }
        }
        else{
            setb(b+valueSelected)
        }
        
    }

    const ac=(e)=>{
     setb(0)
     
    }
    const del =(e)=>{
        let a = b.substring(0,5)
        console.log(a)
        setb(b.slice(2, 6))
    }

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" id="inputBox" placeholder={b} />


        <div>
          <button className="button operator" onClick={ac}>AC</button>
          <button className="button operator"onClick={del}>DEL</button>
          <button className="button operator" onClick={numClick}>%</button>
          <button className="button operator" onClick={numClick}>/</button>
        </div>

        <div>
          <button className="button" onClick={numClick}>7</button>
          <button className="button" onClick={numClick}>8</button>
          <button className="button" onClick={numClick}>9</button>
          <button className="button operator" onClick={numClick}>*</button>
        </div>

        <div>
          <button className="button" onClick={numClick}>4</button>
          <button className="button" onClick={numClick}>5</button>
          <button className="button" onClick={numClick}>6</button>
          <button className="button operator" onClick={numClick}>-</button>
        </div>

        <div>
          <button className="button" onClick={numClick}>1</button>
          <button className="button" onClick={numClick}>2</button>
          <button className="button" onClick={numClick}>3</button>
          <button className="button operator">+</button>
        </div>

        <div>
          <button className="button" onClick={numClick}>00</button>
          <button className="button" onClick={numClick}>0</button>
          <button className="button" onClick={numClick}>.</button>
          <button className="button equalBtn" >=</button>
        </div>
      </div>
    </div>
  )
}

export default Cal
