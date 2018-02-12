import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: [{'id':1,'name':'A'},{'id':2,'name':'B'},{'id':3,'name':'C'}]
      }
      
   };
  
   render() {
      return (
         <div>
         {this.state.data.map((dynamicComponent, i) => <Content 
                  key = {i} myData = {dynamicComponent}/>)}
        </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.myData.id}</div>
            <div>{this.props.myData.name}</div>
         </div>
      );
   }
}
export default App;
