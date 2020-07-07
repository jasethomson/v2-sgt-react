import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';

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
      <div>
        <Header title={st.appHeader} />
        <GradeTable grades={st.grades} />
      </div>
    );
  }
}
