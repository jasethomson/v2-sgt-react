import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <h1>{props.gradeAvg}</h1>
    </header>
  );
}
