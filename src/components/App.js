import React, { Component } from 'react';
import Form from './Form';
//import FaceCalendar from './FaceCalendar';


class App extends Component {
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     date: '',
  //     state: '',
  //     message: '',
  //     saveData: [],
  //     isLoading: true
  //   }
  // }
  //
  // componentWillMount(){
  //   localStorage.getItem('saveData') &&
  //   this.setState({
  //     saveData: JSON.parse(localStorage.getItem('saveData')),
  //     isLoading: false
  //   })
  // }
  //
  // componentDidMount(){
  //   if(localStorage.getItem('saveData')){
  //     this.fetchData();
  //   }else {
  //     console.log('using data from local storage');
  //   }
  // }
  //
  // componentWillUpdate(nextProps, nextState){
  //   let saveData = this.state.saveData;
  //
  //   localStorage.setItem('saveData', JSON.stringify(saveData));
  // }

  render() {
    return (
      <div className="App">
      <Form />

      </div>
    );
  }
}

export default App;
