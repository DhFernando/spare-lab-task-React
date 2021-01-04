import React , { useEffect , useState } from 'react'
import axios from 'axios'

const PracReq = () => {

    const [users , setUsers] = useState([])

    useEffect( async () => {
        let result = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(result.data)

        return () =>{
            console.log("bye")
        }
        
    } , [])

    return (
        <div>
            { users.length > 0 && users.map((user) => {
                return (
                    <div key = { user.id } >
                        {user.id} - { user.name }
                    </div>
                )
            }) }
        </div>
    )
}

export default PracReq
