import React from 'react';
import {Link} from 'react-router-dom';

class Form extends React.Component{

  render(){
    return(
      <div className="form">
        <form  action="">
          <div className="form__date">
            <label htmlFor="date">Fecha</label>
            <input type="date" name="date" onChange={this.props.handleDate}/>
          </div>
          <div className="form__state">
            <p>Estado</p>
            <div className="form__state--check">
              <input type="radio" value=":)" name="state" onClick={this.props.handleState} />
              <label htmlFor="state">:)</label>
              <input type="radio" value=":(" name="state" onClick={this.props.handleState}/>
              <label htmlFor="state">:(</label>
            </div>
          </div>
          <div className={`form__msg ${ this.props.state === ':)'? 'visible' : 'hidden' }`}>
            <label htmlFor="message">Mensaje</label>
            <input placeholder="¿Por qué es un buen día?" type="text" name="message" onChange={this.props.handleMessage} />
          </div>
        </form>

        <div className="form__btn">
          <Link className="link" to='/calendar'>
            <button className="form__btn--style" onClick={this.props.saveDay}>Guardar</button>
          </Link>
          <button className="form__btn--style">Cancelar</button>
        </div>
      </div>
    );
  }
}

export default Form;
