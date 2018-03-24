import React from 'react';
import FaceCalendar from './FaceCalendar';
import {Link, Route, Switch} from 'react-router-dom';

class Form extends React.Component{
  constructor(props){
    super(props);

    this.handleDate = this.handleDate.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.saveDay = this.saveDay.bind(this);
    //this.paintSmile = this.paintSmile.bind(this);

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

  render(){
    return(
      <div className="form">
        <form  action="">
          <div className="form__date">
            <label htmlFor="date">Fecha</label>
            <input type="date" name="date" onChange={this.handleDate}/>
          </div>
          <div className="form__state">
            <p>Estado</p>
            <div className="form__state--check">
              <input type="checkbox" value=":)" name="happy" onClick={this.handleState} />
              <label htmlFor="state">:)</label>
              <input type="checkbox" value=":(" name="sad" onClick={this.handleState}/>
              <label htmlFor="state">:(</label>
            </div>
          </div>
          <div className="form__msg">
            <label htmlFor="message">Mensaje</label>
            <input placeholder="¿Por qué es un buen día?" type="text" name="message" onChange={this.handleMessage} />
          </div>
        </form>

        <div className="form__btn">
          <Link className="link" to='/calendar'>
            <button className="form__btn--style" onClick={this.saveDay}>Guardar</button>
          </Link>
          <button className="form__btn--style">Cancelar</button>
        </div>

        <Switch>
          <Route exact path="/calendar" render= {() =>
            <FaceCalendar saveData={this.state.saveData}
            /> }
          />
        </Switch>
      </div>
    );
  }
}

export default Form;
