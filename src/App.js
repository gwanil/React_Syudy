import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';

  // a : 남자코트추천이 들어있음, b : state 변경도와주는 함수
  // stat 언제쓰는가? -> 변동시 자동으로 html에 변경되게 만들고 싶을 때
  let [글제목, b] = useState('남자 코트 추천');
  let [logo, setLogo] = useState('ReactBlog');

  return (
    <div className='App'>
      {/* JSX 문법1. class 넣을 땐 className */}
      <div className='black-nav'>
        {/* JSX 문법2. style 넣을 땐 style={{이름:'값'}} */}
        {/* <h4 style={{ color: 'red', fontSize: '16px' }}>블로그임</h4> */}

        {/* 블로그 제목은 잘 변경되지 않기 때문에 굳이 안써도됨.. */}
        {/* <h4>{logo}</h4> */}

        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        {/* JSX 문법2. 변수꽂을 땐 {변수명} */}
        {/* <h4>{post}</h4> */}

        <h4>{글제목}</h4>
        <p>6월 27일 발행</p>
      </div>
    </div>
  );
}

export default App;
