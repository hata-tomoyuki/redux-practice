import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>カウント：{counter}</h2>
      <button onClick={() => dispatch(increment(7))}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
      {isLogin ? <h3>ログインに成功！</h3> : <h3>ログインしてください</h3>}
      <button onClick={() => dispatch(login())}>
      {isLogin ? <span>ログアウト</span> : <span>ログイン</span>}
      </button>
    </div>
  );
}

export default App;
