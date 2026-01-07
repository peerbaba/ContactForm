import React, { useState } from 'react'

const Check = () => {
    const  [c,setcheck]=useState({
        check: false,
        check1: false,
        check2: false
    });
  
    const def=(e)=>{
        console.log(e)
     setcheck(prev=>({
        ...prev,
        [e.target.id]: !prev[e.target.id]
       
     }))
    }
    const select=()=>{
setcheck({
    check: true,
    check1: true,
    check2: true
})
    }
    const unselect=()=>{
        setcheck({
    check: false,
    check1: false,
    check2: false
})

    }
 
  return (
    <div>Check
<input type="checkbox"
id='check'
checked={c.check}
onClick={def}/>
<input type="checkbox"
id='check1'
checked={c.check1}
onClick={def}/>
<input type="checkbox"
id='check2'
checked={c.check2}
onClick={def}/>

<br />

{ Object.values(c).every(Boolean)? <button onClick={unselect} >UnSelect All</button> :<button onClick={select} >Select All</button>}
    </div>

  )
}

export default Check