import './App.css';
import { useEffect, useRef, useState } from 'react';
import Card from './component/Card';
import axios from 'axios';

function App() {
  // eslint-disable-next-line
  const [websites, setWebsites] = useState([]) 
  const inputRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    setWebsites(websites => [...websites, inputRef.current.value])
  }

  const abc = () => {
    return(
      <div className='mx-auto d-flex justify-content-center'> 
    <div className="btn-group" role="group" aria-label="Basic example">
    <select className='form-control w-25'>
    <option value="https://">https://</option>
    <option value="http://">http://</option>
    <option value="">IP Address</option>
    </select>
    <form className='d-flex' onSubmit={handleSubmit}><input ref={inputRef} className='form-control' type='text' required/><button className='btn btn-primary mx-3' type='submit'>ADD</button></form>
    </div>
    </div>
    )
  }

  const call = async() => {
    try{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}`,{headers : {"Content-Type":"application/json"}})
    setWebsites(res.data)
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
    call()
  },[])
  return (
    
    <div className='d-flex justify-content-center'>
    <div>
    
    <div className='d-flex flex-wrap justify-content-center mt-3 mx-auto'>
    {websites.map((i) => {
      return(
        <Card website={i} />
      )
    })}
    </div>
    </div>
    </div>
  );
}

export default App;
