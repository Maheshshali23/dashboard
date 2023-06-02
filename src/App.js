import './App.css';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
