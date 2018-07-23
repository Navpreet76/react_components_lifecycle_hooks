import React, { Component } from 'react';
import './App.css';
import Child from './child';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Bowser'
    };
    console.log('constructor');
  }

  componentWillMount(){
    if(window.innerWidth < 500){
      this.setState({innerWidth:window.innerWidth});
    }
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  changeState(){
    this.setState({name:'jill'});
  }

  unmountChild(){
     this.setState({name:'robert'}); 
  }

  render() {
    console.log('render');
    if(this.state.name === 'robert'){
      return(<div/>);
    }
    return (
      <div className="App">
        name{this.state.name}
        | innerWidth:{this.state.innerWidth}
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    );
  }
}

export default App;
