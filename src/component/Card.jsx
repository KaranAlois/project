import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Card = (props) => {
  const [running, setRunning] = useState("Live")
  const [errors, setErrors] = useState("")
  const call = async() => {
    try{
    const body  = {website:`${props.website}`}
    console.log(body.website);
    const res = await axios.post("http://localhost:4000", body, {headers : {"Content-Type":"application/json"}})
    console.log(res);
    }
    catch(err){
      console.log(err);
    }
    }
  useEffect(() => {
    
    call()
  },[])
  return (
    <div className={`border border-3 rounded m-2 p-2 ${running==="Live" ? "border-success" : "border-danger"} `}>
    <h2>{props.website}</h2>
    <p>Current status is <span className='text-success'>{running}</span></p>
    <p>{errors}</p>
    </div>
  )
}

export default Card
