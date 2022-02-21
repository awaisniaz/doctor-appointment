
import './App.css';
import logo from './logo.png'
function App() {
  return (<div className="columns-2 p-3 border-slate-100">
    <div>
      <img src={logo} className='h-14 pr-10 ' alt='logo Image'></img>
    </div>
    <div className='flex justify-end'>
      <button className='bg-cyan-400 p-3 rounded text-gray-50 font-bold hover:bg-cyan-410'>Login/Signup</button>
    </div>
  </div>
  );
}

export default App;
