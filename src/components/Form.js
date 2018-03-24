import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);

    this.handleDate = this.handleDate.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.saveData = this.saveData.bind(this);

    this.state = {
      date: '',
      state: '',
      message: '',
      saveData: []
    }
  }

  handleDate(date){
    let dateInput = date.target.value;

    this.setState({
      date: dateInput
    })
  }


	handleState(state){
    let stateInput = state.target.value;

    this.setState({
      state: stateInput
    })
	}


  handleMessage(msg){
    let msgInput = msg.target.value;

    this.setState({
      message: msgInput
    })
  }

  saveData(){

    this.setState({

    })
  }


  render(){
    return(
      <div className="form">
        <form  action="">
          <div className="form__date">
            <label htmlFor="date">Fecha</label>
            <input type="date" name="date" onClick={this.handleDate}/>
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
          <button className="form__btn--style" onClick={this.saveData}>Guardar</button>
          <button className="form__btn--style">Cancelar</button>
        </div>
      </div>
    );
  }
}

export default Form;
