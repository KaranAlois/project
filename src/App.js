import './App.css';
import { useRef, useState } from 'react';
import Card from './component/Card';

function App() {
  // eslint-disable-next-line
  const [websites, setWebsites] = useState(["akinolabs.com", "google.com"]) 
  const inputRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    setWebsites(websites => [...websites, inputRef.current.value])
  }
  return (
    
    <div className='d-flex justify-content-center m-5'>
    <div> 
    <form className='d-flex' onSubmit={handleSubmit}><input ref={inputRef} className='form-control' type='text' required/><button className='btn btn-primary mx-3' type='submit'>ADD</button></form>
    <div className='d-flex flex-wrap justify-content-center mt-3'>
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
