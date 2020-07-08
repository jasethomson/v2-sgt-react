import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        name: '',
        course: '',
        grade: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(event) {
    const studentState = this.state.student;
    studentState[event.currentTarget.id] = event.target.value;
    this.setState({ student: studentState });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postGrade(this.state.student);
    this.clearForm();
  }

  clearForm(event) {
    const student = {
      name: '',
      course: '',
      grade: ''
    };
    this.setState({ student });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={this.state.student.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="course"
          placeholder="Course"
          value={this.state.student.course}
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="grade"
          placeholder="Grade"
          value={this.state.student.grade}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Add"
        />
        <button type="button" onClick={this.clearForm}>Cancel</button>
      </form>
    );
  }
}
