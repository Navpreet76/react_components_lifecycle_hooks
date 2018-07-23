import React, { Component } from 'react';
import './App.css';

class Child extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Navpreet'
    };
    console.log('child constructor');
  }

  componentWillMount(){
   	 console.log('child componentWillMount');
  }

  componentDidMount(){
    console.log('child componentDidMount');
  }

  componentWillReceiveProps(){
  	console.log('child componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState){
  	console.log('child shouldComponentUpdate');
  	return true; //this set to false would stop child render??
  }

  componentWillUpdate(){
  	console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState){
  	console.log('child prevProps', prevProps)
  	console.log('child prevState', prevState)
  	console.log('child componentDidUpdate')
  }

  componentWillUnmount(){
  	console.log('child componentWillUnmount');
  }
  render() {
    console.log('child render');
    return (
      <div className="App">
        child name: {this.props.name}
      </div>
    );
  }
}

export default Child;
