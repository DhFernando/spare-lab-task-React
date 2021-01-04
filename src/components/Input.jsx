import React , {forwardRef} from 'react'

function Input( props , ref ) {
    return (
        <input ref={ref} {...props} />
    )
}

const forwardInput = forwardRef(Input)

export default forwardInput
