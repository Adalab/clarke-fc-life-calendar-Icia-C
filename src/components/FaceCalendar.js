import React from 'react';
import Happy from '../img/happy.png';
import Sad from '../img/sad.png';
//import button from './img/plusbtn.png'
//import App from './App';
//import {Link, Route, Switch} from 'react-router-dom';

class FaceCalendar extends React.Component{

  render(){
    return(
      <div>
      <ul>{this.props.saveData.map((data, i) =>
        <li>{data.state === ':)'?<img src={Happy} alt="happy"/>:<img src={Sad} alt="happy"/>}
        {data.date}
        {data.msg}</li>
      )}
      </ul>
      </div>
  );
  }
}

export default FaceCalendar;
/*{// <Link className="link" to='/'>
//   <button><img src={button} alt="plus__button"/></button>
// </Link>
// <ul>
//   <li><img src={this.props} alt="plus__button"/></li>
//   <li></li>
//   <li></li>
// </ul>
// <Switch>
//   <Route exact path="/" component={App} />
// </Switch>}*/
