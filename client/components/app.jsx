import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

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
      .then(grades => this.setState({ grades: grades.grades }))
      .then(() => this.getAverageGrade());
  }

  getAverageGrade() {
    if (this.state.grades) {
      const grades = this.state.grades;
      let gradeTotal = 0;
      grades.map(gradeObj => {
        gradeTotal += gradeObj.grade;
      });
      this.setState({ gradeAvg: Math.ceil(gradeTotal / grades.length) });
    }
  }

  postGrade(grade) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(grade)
    };

    fetch('/api/db', req)
      .then(() => {
        const allGrades = this.state.grades.concat(grade);
        this.setState({ grades: allGrades });
      })
      .finally(() => this.getGrades());
  }

  componentDidMount() {
    this.getGrades();
  }

  render() {
    const st = this.state;
    return (
      <div>
        <Header title={st.appHeader} gradeAvg={st.gradeAvg} />
        <GradeTable grades={st.grades} />
        <GradeForm postGrade={this.postGrade} />
      </div>
    );
  }
}
