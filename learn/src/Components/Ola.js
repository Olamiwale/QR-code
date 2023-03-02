import react,{useEffect, useState} from 'react'
import axios from 'axios';

function Ola () {

const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then((res)=>{
            setPhotos(res.data)
        }).catch()
      });

    return(
        <div>

        {
            photos.map(post => <img key={post.id}  src={post.url}/> )
        }
     
        
        </div>
    )
}

export default Ola