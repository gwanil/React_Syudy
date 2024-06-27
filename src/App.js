import logo from './logo.svg';
import './App.css';

function App() {
  let post = '강남 우동 맛집';

  return (
    <div className='App'>
      {/* JSX 문법1. class 넣을 땐 className */}
      <div className='black-nav'>
        {/* JSX 문법2. style 넣을 땐 style={{이름:'값'}} */}
        <h4 style={{ color: 'red', fontSize: '16px' }}>블로그임</h4>
      </div>
      {/* JSX 문법2. 변수꽂을 땐 {변수명} */}
      <h4>{post}</h4>
    </div>
  );
}

export default App;
