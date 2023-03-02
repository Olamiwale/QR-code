import react, { useState } from 'react'

function Form2 () {

    const [mon, setMon] = useState('')
    return(
        <div>
     <input value={mon}  onChange={e=>setMon(e.target.value)}/>
     <input onChange={e =>setMon(e.target.value)} value={mon} />
     <input value={mon}  onChange={e=>setMon(e.target.value)}/>
     <input onChange={e =>setMon(e.target.value)} value={mon} />
        </div>
    )
}

export default Form2