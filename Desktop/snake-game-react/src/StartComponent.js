import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
//import GameComponent from './GameComponent.js';
class StartComponent extends Component {
  constructor() {
    super();
    this.state = {
      newPlayer: '',
      Players: [{
        name: '',
        done: false,
        score:'0'
      }]
    }
  }
  newPlayerAdded(event) {
    this.setState({
      newPlayer: event.target.value
    });
  }
  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newPlayer: '',
      Players: [...this.state.Players, {
        name: this.state.newPlayer,
        done: false,
        score:'0'
      }]
    });
  


    return (
      
      <div className="container-fluid" style={{margin:'200px 0'}} >
    <div id ="main" style={{backgroundColor:'#000',width:'100%',alignItems:'center'}}className="card card-body">
      <form onSubmit={this.formSubmitted} className="form-inline mb-3">
        <input onChange={this.newPlayerAdded} placeholder={this.placeholder}
         className="form-control mr-2" value={this.newPlayer} />
         
       <button type="submit" className="btn btn-primary">
       Start Game
       </button>
      </form>
      </div>
      </div>
    )
  };

}
  
export default StartComponent; 