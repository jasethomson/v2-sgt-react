import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {
  if (props.grades && props.grades.length > 0) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {props.grades.map(grade => {
            return (
              <Grade
                key={grade.id}
                grade={grade}
                deleteGrade={props.deleteGrade}
              />
            );
          }) }
        </tbody>
      </table>
    );
  } else {
    return (
      <h5>No grades recorded.</h5>
    );
  }

}
