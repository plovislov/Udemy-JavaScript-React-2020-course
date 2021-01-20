import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const elem = (
    <div>


    </div>
);

const Header = () => {
  return <h2>Hello world</h2>
}

const Field = () => {
  const holder = 'Enter here';

  const styledField = {
    width: '300px'
  }

  return <input
      style={styledField}
      type="text"
      placeholder={holder}
      autoComplete=''
      className='first'
      htmlFor=''/>
}

const Btn = () => {
  const text = 'Log in';
  const logged = false;

  const res = () => {
    return 'Log in';
  }
  return <button>{logged ? 'Enter' : text}</button>
}

const App = () => {
  return (
      <div>
        <Header/>
        <Field/>
        <Btn/>
      </div>
  )
}

ReactDOM.render(<App/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
