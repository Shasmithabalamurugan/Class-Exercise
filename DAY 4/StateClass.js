import { Component } from "react";

class Stateclass extends Component{
    state={
        Actress:"Priyanka Chopra",
        Industry:"Bollywood"
    }
    handleChange=()=>{this.setState({Actress:"Deepika Padukone"})}
    render()
    {
        return(
            <div>
                <h1>He also acted with {this.state.Actress} from {this.state.Industry}</h1>
                <button onClick ={this.handleChange}>Click me</button>
            </div>
        )
    }
}
export default Stateclass;