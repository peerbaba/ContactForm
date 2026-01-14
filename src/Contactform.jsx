import React, { useState } from 'react'

const Contactform = () => {

  const Initial=
  [
  { "Name": "Aarav", "Number": "9000000001" },
  { "Name": "Vivaan", "Number": "9000000002" },
  { "Name": "Aditya", "Number": "9000000003" },
  { "Name": "Rohan", "Number": "9000000004" },
  { "Name": "Kunal", "Number": "9000000005" },
  { "Name": "Rahul", "Number": "9000000006" },
  { "Name": "Sandeep", "Number": "9000000007" },
  { "Name": "Amit", "Number": "9000000008" },
  { "Name": "Vikas", "Number": "9000000009" },
  { "Name": "Nikhil", "Number": "9000000010" },
  { "Name": "Pankaj", "Number": "9000000011" },
  { "Name": "Deepak", "Number": "9000000012" },
  { "Name": "Manish", "Number": "9000000013" },
  { "Name": "Ankit", "Number": "9000000014" },
  { "Name": "Sachin", "Number": "9000000015" },
  { "Name": "Ravi", "Number": "9000000016" },
  { "Name": "Sunil", "Number": "9000000017" },
  { "Name": "Ajay", "Number": "9000000018" },
  { "Name": "Gaurav", "Number": "9000000019" },
  { "Name": "Mohit", "Number": "9000000020" }
]


  const [b,setb]= useState(Initial)

  const Hello =(e)=>{
    e.preventDefault()
    console.log("Dev")

    const c={
      Name:e.target[0].value,
      Number:e.target[1].value,
    }
    setb([...b,c]) 
      
    }  


    const d =(e)=>{
           
      if(e.key==='Enter'){
        if(e.target.value===''){
          setb(Initial)
        } else{

          let c = b.filter((item)=>{
return item.Name.includes(e.target.value)
})

setb(c)
        }
        

      }
      
   

    }

  return (
    <div>Contactform
      <br /> <br />
      <input type="text"  placeholder='Search Box' onKeyDown={d}/>
      <form onSubmit={Hello}>
        <input type="text" placeholder='Name'/> <br /> <br />
        <input type="text" placeholder='Number'/> <br /> <br />
        <button>Submit</button>
      </form>

      <div className='container1' >
       {b.map((item)=>(
<div className='style'>
  Name:{item.Name}
  Number:{item.Number}
</div>
       ))}

      </div>
    </div>
  )
}

export default Contactform