export default function (){
    return(
        <div>
        <p id="greeting" className="font-bold text-2xl">Hello world</p>
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-5 rounded-xl"  onclick="greetingChange()" >change the greeting</button>
        </div>
    )
}