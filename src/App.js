import logo from './logo.svg';
import './App.css';
import react, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput= this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
  }

  handleInput = (e)=>{
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      }
    })
  }

  addItem = (e) =>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    let {items}=this.state;
    items.push(newItem);
    this.setState({items});
  }



  render(){
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type='text' placeholder='Enter Text' value={this.state.currentItem.text} onChange={this.handleInput} />
            <button type='submit'>+</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
