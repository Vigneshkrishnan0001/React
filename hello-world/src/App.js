import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import  Reply from './component/Reply';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Parent from './component/Parent';

function App() {
  return (
    <div className="App">
     <Parent />
    </div>
  );
}

export default App;
