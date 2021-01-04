import React , { useEffect , useState } from 'react'
import axios from 'axios'

function UserList() {

    useEffect(async() => {
        try{
            let res = await axios.get("http://localhost:2000/product" , {
                    headers: { 'Authorization': `Basic ${token}` }
            } )

            setUsers(res.data)
        }catch(e){

        }
    } , [])

    const [ users , setUsers ] = useState(null)

    return (
        <div>
            
        </div>
    )
}

export default UserList
