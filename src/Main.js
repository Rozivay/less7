import  { Component } from 'react';
import zerolvl from './img/маквин13.png';
import ImgComp from './components/ImgComp';
import'./style.css'
import Button from './components/Button';
export default class Main extends Component {
  // state = {
  //   num: 0,
  //   text: "hello world",
  // };

    componentDidMount(){
console.log('did mount')
    }

    componentDidUpdate(){
       console.log('did update')
    }
  render() {
   

   const {count, setCount} = this.props;
 
    return (
      <div className='main'>
            

    <Button   num={count} setCount={setCount}/>
      <ImgComp num={count} />
      </div>
    )
  }
}


{/* <h1>{num}{
  num === 1
  ?'min'
  : num === 15 
  ?'max'
  :''
}</h1>
<button onClick={()=>{
 if(num < 15)this.setState({num:num + 1})
}}>+</button>
<button onClick={()=>{
  this.setState({num:0})
}}>reset</button>
<button onClick={()=>{
  this.setState({num:15})
}}  >MAX</button>
<button onClick={()=>{
  this.setState({num:1})
}} >min</button>
<button onClick={()=>{
if(num > -1)this.setState({num: num-1})
}}>-</button> */}


{/* <div className='block-img'>
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
</div> */}