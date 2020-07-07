import React from 'react';

export default function Grade(props) {
  if (props.grade.name) {
    return (
      <tr id={props.grade.id}>
        <td>{props.grade.name}</td>
        <td>{props.grade.course}</td>
        <td>{props.grade.grade}</td>
      </tr>
    );
  } else {
    return null;
  }
}
