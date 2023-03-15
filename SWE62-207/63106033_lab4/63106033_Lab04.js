import React from 'react';


class TableMul extends React.Component {
  constructor(){
    super();
    this.state={
      num1: ' ',
      num2: ' ',
      total: ' '
    }
  }

  handlenum1 =(event) => {
    this.setState({
      num1:event.target.value
    })
  }

  handlenum2 =(event) => {
    this.setState({
      num2:event.target.value
    })
  }

  subm = (m) => {
    this.setState({total: parseInt(this.state.num1) + parseInt(this.state.num2)})
      m.preventDefault();
  }
  
  render(){
    return(
      <div>
        <h1> Multiplication Table </h1>
       <form onSubmit={this.subm}>
       <div>
          Enter 1:
          <input type="text" value={this.state.num1} onChange={this.handlenum1}/>
        </div>
        <div>
        Enter 2: 
        <input type="text" value={this.state.num2} onChange={this.handlenum2}/>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
        <h2>Total is {this.state.total}</h2>

        <div>{this.state.total} X 1 = {this.state.total*1}</div>
        <div>{this.state.total} X 2 = {this.state.total*2}</div>
        <div>{this.state.total} X 3 = {this.state.total*3}</div>
        <div>{this.state.total} X 4 = {this.state.total*4}</div>
        <div>{this.state.total} X 5 = {this.state.total*5}</div>
        <div>{this.state.total} X 6 = {this.state.total*6}</div>
        <div>{this.state.total} X 7 = {this.state.total*7}</div>
        <div>{this.state.total} X 8 = {this.state.total*8}</div>
        <div>{this.state.total} X 9 = {this.state.total*9}</div>
        <div>{this.state.total} X 10 = {this.state.total*10}</div>
        <div>{this.state.total} X 11 = {this.state.total*11}</div>
        <div>{this.state.total} X 12 = {this.state.total*12}</div>
       </form>
      </div>
    )
  }
}


export default TableMul;