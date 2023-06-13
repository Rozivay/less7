import React, { Component } from 'react'
import lvl1 from '../img/lvl.1.jpg';
import lvl2 from '../img/lvl.2.jpg';
import lvl3 from '../img/lvl.3.jpg';
import lvl4 from '../img/lvl.4.jpg';import zerolvl from '../img/маквин13.png';
export default class ImgComp extends Component {
  render() {
    const {num } = this.props;

    return (
      <div>
        <div className='block-img'>
{
  num < 0
  ? <img src={zerolvl}alt=''/>
  : num < 5
  ?<img src={lvl1}alt=''/>
  :num < 10
  ?<img src={lvl2}alt=''/>
  :num < 15
  ?<img src={lvl3}alt=''/>
  :num === 15
  ?<img src={lvl4}alt=''/>
  :''
}
</div>
      </div>
    )
  }
}
