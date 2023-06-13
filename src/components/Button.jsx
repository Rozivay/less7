import React, { Component } from "react";
import lvl1 from '../img/lvl.1.jpg';
import lvl2 from '../img/lvl.2.jpg';
import lvl3 from '../img/lvl.3.jpg';
import lvl4 from '../img/lvl.4.jpg';
export default class Button extends Component {

  render() {
    const{ setCount,num } = this.props;
  
    
    return (
      <div>
        <h1>
            
          {num}
          {this.num === 1 ? "min" : this.num === 15 ? "max" : ""}
        </h1>
        <button
          onClick={() => {
            if (num < 15) setCount(num+1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
         setCount(0);
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
         setCount(15);
          }}
        >
          MAX
        </button>
        <button
          onClick={() => {
         setCount(1);
          }}
        >
          min
        </button>
        <button
          onClick={() => {
            if (num > -1) setCount(num -1);
          }}
        >
          -
        </button>
      </div>
    );
  }
}
