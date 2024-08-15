
import { useEffect,useState } from "react";
var API_URL="127.0.0.1:3005";

export default function Visitors() {

    const [count,setCount]=useState();
    useEffect(()=>{
        async function getCount(){
            var response = await fetch(`http://${API_URL}/Visitors`);
            let data = await response.json();
            setCount(data)
        }
        getCount();
    },[]);

    return(
        <div> <p id="visitorcount"
        className="font-bold text-2xl">visitor count:{count}</p>
        </div>

    )
}
