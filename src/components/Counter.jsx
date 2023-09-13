import { useState  } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <>
        <span class="text-yellow-500 text-xl mr-4">{count}</span>
        <button class="border px-4 py-2 text-lg font-bold" onClick={()=> setCount(count => count+1)}>+</button>
        <button class="border px-4 py-2 text-lg font-bold" onClick={()=> setCount(count => count-1)}>-</button>

    </>
  )
}

export default Counter
