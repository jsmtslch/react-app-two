import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   clearInput(){
       this.setState({data:''});
        //ReactDOM.findDOMNode(this.refs.myInput).focus();
        ReactDOM.findDOMNode(this.refs.myParentInputRef).focus();
   }
   render() {
      return (
         <div>
            <Content myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Content>
            <button onClick={this.clearInput}>Clear</button>
            <input type="text" defaultValue={this.state.data} ref="myParentInputRef"/>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} ref="myInput"/>
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}
export default App;
