import React , {useState , useEffect , useCallback , useMemo , lazy , Suspense} from 'react'

const SubComp = lazy(()=>import("./SubComp"))
const PracReq = lazy(()=> import("./pracReq"))

function MainComp() {

    const [count , setCount] = useState(0)
    const [openReq , setOpenReq] = useState(false)

    const increaseCount = ()=>{
        setCount( count + 1 )
    } 

    const MemoSubComp = useMemo(() =>{
        return <SubComp />
    },[])

    const MemoPracReq = useMemo(()=>{
        return <PracReq />
    } , [])


    return (
        <div>
            Hello react
            <br />
                { count }
            <br/>
                { count === 4 && <>Its {count} !!</> }
            <br/>
                <button onClick = {increaseCount} > + </button>
                <button onClick = { () => { setOpenReq(!openReq) } } > { !openReq ? "Open Req" : "Close Req" } </button>
            <br/>
            <Suspense fallback={<>loading ...</>}>
                {MemoSubComp}
            </Suspense>
            <br />
            
            {openReq && (
                <Suspense fallback = {<> Loading </>} >
                    {MemoPracReq}
                </Suspense>
            )}
            
        </div>
    )
}

export default MainComp
