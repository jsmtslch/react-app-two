import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:'Initial Data...'
        }
        this.onchangeevent = this.onchangeevent.bind(this);
    }
    render(){
        return(
            <div>
                <div>Hello World, again.</div>
                <InputField fielddata={this.state.data} onchangeevent={this.state.onchangeevent}/>
            </div>
        )
    }

    onchangeevent(){
        this.state.data = 'a'+this.state.data+'z';
    }
}

class InputField extends React.Component{
    render(){
        return(
            <div><input type="text" value={this.props.fielddata} onChange={this.props.onchangeevent}></input></div>
        )
    }
}

export default App;