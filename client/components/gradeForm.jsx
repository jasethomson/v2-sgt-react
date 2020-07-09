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
        <div className="inputContents">
          <i className="fa fa-user fa-lg" aria-hidden="true"></i>
          <input
            type="text"
            id="name"
            className="input"
            placeholder="Name"
            value={this.state.student.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="inputContents">
          <i className="fa fa-list-alt fa-lg" aria-hidden="true"></i>
          <input
            type="text"
            id="course"
            className="input"
            placeholder="Course"
            value={this.state.student.course}
            onChange={this.handleChange}
          />
        </div>
        <div className="inputContents">
          <i className="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>
          <input
            type="text"
            id="grade"
            className="input"
            placeholder="Grade"
            value={this.state.student.grade}
            onChange={this.handleChange}
          />
        </div>
        <div className="buttonContainer">
          <input
            type="submit"
            className="button"
            value="Add"
          />
          <button type="button" className="button cancelButton btn-danger" onClick={this.clearForm}>Cancel</button>
        </div>

      </form>
    );
  }
}
