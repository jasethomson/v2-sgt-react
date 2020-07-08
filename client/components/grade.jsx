import React from 'react';

export default function Grade(props) {
  if (props.grade.name) {
    const tds = [];
    for (const attr in props.grade) {
      if (attr !== 'id') {
        tds.push(<td key={props.grade[attr]}>{props.grade[attr]}</td>);
      }
    }
    tds.push(<td key={`${props.grade.id}Delete`}><button onClick={() => props.deleteGrade(props.grade.id)}>Delete</button></td>);
    return (
      <tr id={props.grade.id}>
        {tds}
      </tr>
    );
  } else {
    return null;
  }
}
