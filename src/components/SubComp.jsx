import React , { useState ,useEffect , useRef } from 'react'
import Input from './Input'
function SubComp({name}) {

    const inputname = useRef(null);
    const [inputedname , setInputname] = useState(null)
    useEffect(()=>{
        inputname.current.focus();
    } , [])

    const print = (e) =>{ 
        if( e.key === "Enter" ){ 
            alert(inputedname) 
        }
    }

    console.log("rendering");
    return (
        <div>
            {name}
            {inputedname}
            <br/>
            
            <br/>
            <Input ref={inputname} onChange={(e)=>{setInputname(e.target.value)}} onKeyDown={ print } type="text" ></Input>
        </div>
    )
}
 
export default SubComp
