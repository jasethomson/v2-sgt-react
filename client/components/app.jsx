import React from 'react';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      appHeader: 'Student Grade Table'
    };
  }

  componentDidMount() {

  }

  render() {
    const st = this.state;
    return (
      <Header title={st.appHeader}/>
    );
  }
}
