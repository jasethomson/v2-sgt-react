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
    this.postGrade = this.postGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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
        gradeTotal += parseInt(gradeObj.grade);
      });
      const gradeSum = gradeTotal !== 0 ? Math.ceil(gradeTotal / grades.length) : 0;
      this.setState({ gradeAvg: gradeSum });
    }
  }

  postGrade(grade) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(grade)
    };
    fetch('/api/grades', req)
      .then(res => { this.getGrades(); });
  }

  deleteGrade(id) {
    const deleteId = { id: parseInt(id) };
    const req = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(deleteId)
    };
    fetch(`/api/grades/${parseInt(id)}`, req)
      .then(res => { this.getGrades(); });
  }

  componentDidMount() {
    this.getGrades();
  }

  render() {
    const st = this.state;
    return (
      <div className="landing">
        <Header title={st.appHeader} gradeAvg={st.gradeAvg} />
        <div className="mainContents">
          <GradeTable grades={st.grades} deleteGrade={this.deleteGrade} />
          <div className="addGradeContents">
            <h3>Add Grade</h3>
            <GradeForm postGrade={this.postGrade} />
          </div>

        </div>
      </div>
    );
  }
}
