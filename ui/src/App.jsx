
import './App.css';
import Greetings from './components/Greetings';
import Visitors from './components/Visitors';

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Greetings/>
      <Visitors/>
      
    </div>
  )
}


export default App;
