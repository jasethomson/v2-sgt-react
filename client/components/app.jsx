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

  getGrades() {
    fetch('/api/db')
      .then(res => res.json())
      .then(grades => this.setState({ grades }));
  }

  componentDidMount() {
    this.getGrades();
  }

  render() {
    const st = this.state;
    return (
      <Header title={st.appHeader}/>
    );
  }
}
