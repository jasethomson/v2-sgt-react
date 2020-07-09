import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <h3>Average Grade <span className="badge badge-secondary">{props.gradeAvg}</span></h3>
    </header>
  );
}
