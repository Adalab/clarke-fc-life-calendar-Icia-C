import React from 'react';
import Happy from '../img/happy.png';
import Sad from '../img/sad.png';
import Button from '../img/plusbtn.png';
import {Link} from 'react-router-dom';

class FaceCalendar extends React.Component{

  render(){
    return(
      <div>
      <Link className="link" to='/'>
        <button className="btn__plus">+</button>
      </Link>
        <ul className="face__list">{this.props.saveData.map((data, i) =>
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
