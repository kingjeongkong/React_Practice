import React from 'react';
import PropTypes from 'prop-types';

const Student = (props) => {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
};

// props의 타입이 일치하는지 확인
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: 'Guest',
  age: 0,
  isStudent: false,
};

export default Student;
