import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>カウント：{counter}</h2>
      {isLogin ? <h3>ログインに成功！</h3> : <h3>ログインしてください</h3>}
    </div>
  );
}

export default App;
