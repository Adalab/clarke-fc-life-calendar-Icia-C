import React, { Component } from 'react';
import Form from './Form';
import FaceCalendar from './FaceCalendar';
import {Route, Switch} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);

    this.handleDate = this.handleDate.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.saveDay = this.saveDay.bind(this);

    this.state = {
      date: '',
      state: '',
      message: '',
      saveData: [],
      isLoading: true
    }
  }

  componentWillMount(){
    localStorage.getItem('saveData') &&
      this.setState({
        saveData: JSON.parse(localStorage.getItem('saveData')),
        isLoading: false
      })
  }

  componentWillUpdate(nextProps, nextState){
    let saveData = this.state.saveData;
    localStorage.setItem('saveData', JSON.stringify(saveData));
  }

  //catch input values
  handleDate(date){
    let dateInput = date.target.value;
    this.setState({ date: dateInput })
  }
  handleState(state){
    let stateInput = state.target.value;
    this.setState({ state: stateInput })
  }
  handleMessage(msg){
    let msgInput = msg.target.value;
    this.setState({ message: msgInput })
  }

  saveDay(){
    let dataDate = this.state.saveData;

    dataDate.push({
      date: this.state.date,
      state: this.state.state,
      msg: this.state.message
    })
    this.setState({
      saveData: dataDate
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header"><h1><span>☀</span> ¿Cómo te ha ido el día? </h1></header>
        <Switch>
          <Route exact path="/" render= {() =>
            <Form handleDate = {this.handleDate}
                  handleState = {this.handleState}
                  handleMessage = {this.handleMessage}
                  saveDay = {this.saveDay}
                  saveData = {this.state.saveData}
                  state = {this.state.state}
            /> }
          />
          <Route exact path="/calendar" render= {() =>
            <FaceCalendar saveData={this.state.saveData}
            /> }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
