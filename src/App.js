import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';
import { addByAmount } from './features/data/inputDataSlice';
import { useGetPostsQuery } from './services/fakeAPI';

function App() {
  const { data, isError, isLoading } = useGetPostsQuery();
  console.log(isError)
  console.log(useGetPostsQuery())
  const value = useSelector((state) => state.counter.value);
  const inputValue = useSelector((state) => state.data.value);
  const dispatch= useDispatch();
  return (
    <div className="App">
      <p>{value}</p>
      <button onClick={()=>dispatch(increment())}>Increment by 1</button><br/><br/>
      <button onClick={()=>dispatch(decrement())}>Decrement by 1</button><br/><br/>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button><br /><br />
      <input type="text" placeholder="Enter a number" onChange={(e) => dispatch(addByAmount(e.target.value))} />
      <button onClick={()=>dispatch(incrementByAmount(Number(inputValue)))}>Add { inputValue}</button>
      {isLoading && <h1>Loading ......</h1>}
      {isError && <h1>{isError}</h1>}
      {data && <h1>Data Loaded</h1> }
    </div>
  );
}

export default App;
