import { useState } from 'react';

const [count,setCount] = useState(0);
const incrementCount=()=>{
    setCount(count +1);
}

export default function (){
    return(
        <div>
            <p id="visitorcount"
            className="font-bold text-2xl" onLoad={incrementCount}>visitor count:{count}
            </p>
            


        </div>


    )
}