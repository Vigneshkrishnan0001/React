import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import  Reply from './component/Reply';
import Welcome from './component/Welcome';
import Message from './component/Message';

function App() {
  return (
    <div className="App">
     <Greet />
     <Reply name ="props" />
     <Reply name ="props1" />
     <Welcome name ="class"/>
     <Message />
    </div>
  );
}

export default App;
