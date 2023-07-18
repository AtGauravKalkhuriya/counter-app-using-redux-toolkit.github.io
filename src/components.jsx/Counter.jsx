import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/CounterSlice';
const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className="flex gap-x-[30px]">
        <button className="bg-green-500 p-[10px] text-white rounded hover:bg-pink-700 transition-all duration-500 uppercase"
         onClick={()=>dispatch(increment())}>
            Increment
        </button>
        <br/>
        <br/>
        <div className="mt-[15px] bg-[black] p-[10px] w-[70px] text-center text-white rounded hover:bg-pink-700 transition-all duration-500 uppercase">{count}</div>
        <br/>
        <br/>
        <button className="bg-green-500 p-[10px] text-white rounded hover:bg-pink-700 transition-all duration-500 uppercase"
         onClick={()=>dispatch(decrement())}>
            Decrement
        </button>
    </div>
  )
}

export default Counter