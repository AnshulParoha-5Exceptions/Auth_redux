import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice';

const IncDec = () => {
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counter)
    return (
        <div>
            <center>

                <button onClick={()=>dispatch(increment())}>Increment</button>
                &nbsp;<span>{count}</span>&nbsp;
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
                <br />
                <br />
                <button onClick={()=>dispatch(reset())}>Reset Count</button>

            </center>
        </div>
    )
}

export default IncDec
