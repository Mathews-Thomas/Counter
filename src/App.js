import './App.css';
function App() {
  count [count, setcount] = useState(0)
  
  return (
    <div className="App">
     <h1>Counter</h1>
    <h2>Count : </h2>
    <div><button omClick={(e)=> setcount(count +1)}>+</button> <button onClick={()=>setcount(count -1)}>-</button></div>
    </div>
  );
}

export default App;
