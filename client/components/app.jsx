import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      appHeader: 'Student Grade Table',
      gradeAvg: 0
    };
  }

  getGrades() {
    fetch('/api/db')
      .then(res => res.json())
      .then(grades => this.setState({ grades }))
      .then(() => this.getAverageGrade());
  }

  getAverageGrade() {
    if (this.state.grades) {
      const grades = this.state.grades.grades;
      let gradeTotal = 0;
      grades.map(gradeObj => {
        gradeTotal += gradeObj.grade;
      });
      this.setState({ gradeAvg: Math.ceil(gradeTotal / grades.length) });
    }
  }

  componentDidMount() {
    this.getGrades();
  }

  render() {
    const st = this.state;
    let grades = [];
    if (st.grades.grades) {
      grades = st.grades.grades;
    }
    return (
      <div>
        <Header title={st.appHeader} gradeAvg={st.gradeAvg} />
        <GradeTable grades={grades} />
      </div>
    );
  }
}
