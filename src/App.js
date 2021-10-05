import React, { Component } from "react";
import './style.css'
import logo from './biscoito.png';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textokotowaru: ''
    };
    this.quebrabiscoito = this.quebrabiscoito.bind(this)
    this.ことわざ = [`明日は明日の風が吹く`,`初心忘るべからず`,`三日坊主`,`焼け石に水`,`能ある鷹は爪を隠す`];
  }

  quebrabiscoito(){
    let state = this.state;
    let  a = Math.floor(Math.random() * this.ことわざ.length)
    state.textokotowaru = this.ことわざ[a];
    this.setState(state);
  }
  

  render(){
    return(
      
      <div className='container'>
        <img className ='bisc' src ={logo} />
        <ボタン nome="開ける" acao={this.quebrabiscoito}/>
        <h3 className="textokotowaru">{this.state.textokotowaru}</h3>
     </div>

    )
  }
}
class ボタン extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acao}>{this.props.nome}</button>
        <h3></h3>
      </div>
    );
  }
}
{}
export default App;
