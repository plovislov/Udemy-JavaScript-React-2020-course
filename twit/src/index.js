import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';
import './index.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26
    }
    this.nextYear = this.nextYear.bind(this);
  }

  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
        <>
          <h1>My name is {name}, surname - {surname}, years = {years}</h1>
          <a href={link}>My profile</a>
        </>
    )
  }
}

const All = () => {
  return (
      <>
        <WhoAmI name='John' surname='Smith' link='facebook.com'/>
        <WhoAmI name='Alex' surname='Smith' link='facebook.com'/>
        <WhoAmI name='Kin' surname='Smith' link='facebook.com'/>
      </>
  );
}

ReactDOM.render(<App/>,
    document.getElementById('root')
);

