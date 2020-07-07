import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {

  function renderGrades(grades) {
    if (grades.length > 0) {
      grades(item => {
        return (
          <Grade grade={item} />
        );
      });
    }
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {renderGrades(props.grades)}
      </tbody>
    </table>
  );
}
