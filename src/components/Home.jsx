import React , { useEffect , useState } from 'react'
import axios from 'axios'



const Home = () => {

    const [token , setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRoZiIsIl9pZCI6IjVmZjJmNWExOTZmMjQzODM2YzcwNzJhNyIsImlhdCI6MTYwOTc3MDkwOH0.zQQsY4yb7ThlX2228Vp5N5eKvX8afESBAvsITrHUfMY")
    
    useEffect(async()=>{
        let result = await axios.get("http://localhost:2000/product" , {headers: {
            'Authorization': `Basic ${token}` 
          }} )
        console.log(result.data)

        return () =>{
            console.log("bye")
        }
    } , [])

    return (
        <div>
            
        </div>
    )
}

export default Home
