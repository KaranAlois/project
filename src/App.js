import './App.css';
import { useEffect, useRef, useState } from 'react';
import Card from './component/Card';
import axios from 'axios';

function App() {
  // eslint-disable-next-line
  const [websites, setWebsites] = useState([]) 
  const [loading, setLoading] = useState(false)
  const inputRef = useRef()
  const ipRef = useRef()
  

  const call = async() => {
    try{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}`,{headers : {"Content-Type":"application/json"}})
    setWebsites(res.data)
    }
    catch(err){
      console.log(err);
    }
  }

  const handleClick = (e) => {
    console.log(e);
  }

  useEffect(() => {
    call()
  },[])


  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
    const str = ipRef.current.value + inputRef.current.value
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, {"url": str})
    call()
    }
    catch(err){
      console.error("Error", err)
    }
    }

  return (
    <div>
       
    <div className='mx-auto d-flex justify-content-center mt-2'> 
    <div className="btn-group" role="group" aria-label="Basic example">
    <select className='form-control w-25' ref={ipRef}>
    <option value="https://">https://</option>
    <option value="http://">http://</option>
    <option value="">IP Address</option>
    </select>
    <form className='d-flex' onSubmit={handleSubmit}><input ref={inputRef} className='form-control' type='text' required/><button className='btn btn-primary mx-3' type='submit'>ADD</button></form>
    </div>
    </div>
    <div className='d-flex justify-content-center'>
    <div>
    <div className='d-flex flex-wrap justify-content-center mt-3 mx-auto'>
    {websites.map((i) => {
      return(
        <div style={{cursor:"pointer"}} onClick={() => handleClick(i)}>
        <Card website={i} />
        </div>
      )
    })}
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
