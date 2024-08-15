import { useEffect, useState } from "react";
var API_URL ='127.0.0.1:3005';


export default function Greetings(){

    const [greetings,setGreetings]=useState();
    const [greetingList,setGreetingList]=useState([]);

    useEffect(()=>{
        async function getgreetings(){
            var response = await fetch(`http://${API_URL}/greetings`);
            let data = await response.json();
            setGreetingList(data)
            setGreetings(data[0])
        }
        getgreetings();
},[]);
function changeGreetings() {
    const randomIndex =Math.floor(Math.random() * greetingList.length);
    setGreetings(greetingList[randomIndex])
}

    return(
        <div>
        <p id="greeting" className="font-bold text-2xl">{greetings}</p>
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-5 rounded-xl"  onClick={changeGreetings} >change the greeting</button>
        </div>
    )
}