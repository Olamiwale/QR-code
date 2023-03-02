import react,{useEffect, useRef, useState} from 'react'


function Temp (props) {

    const {handleChange, message, num} = props

    const  inputRef = useRef()
    
    useEffect(()=>{
      inputRef.current.focus()
    }, [])
  
    return (
      <div><input
          type='text'
          onChange={handleChange}
          value={message}
          ref ={inputRef}
        /> 
        <div>{num} </div>
        </div>
        
      ); 
}

export default Temp