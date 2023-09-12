import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Card = (props) => {
  const [running, setRunning] = useState(props.website.status)
  return (
    <div className={`border border-3 rounded m-2 p-2 text-center ${running==="live" ? "border-success" : "border-danger"} `}>
    <h3>{props.website.url}</h3>
    <h5 className={`${running==="live" ? "text-success" : "text-danger"} `}>Website is <span >{running}</span></h5>
    <p className='text-danger'>{props.website.error}</p>
    </div>
  )
}

export default Card
