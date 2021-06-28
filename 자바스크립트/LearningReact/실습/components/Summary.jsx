import React from 'react';
import PropTypes from 'prop-types';

const Summary = props => {
  const { ingredients, steps, title } = props;
  return (
    <div className="summary">
      <h1>{title}</h1>
      <p>
        <span>재료 {ingredients} 종류 | </span>
        <span>총 {steps} 단계</span>
      </p>
    </div>
  );
};

Summary.propTypes = {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
  title: (props, propName) =>
    typeof props[propName] !== 'string'
      ? new Error('제목(title)은 문자열이어야 합니다.')
      : props[propName].lenght > 20
      ? new Error('제목은 20자 이내여야 합니다.')
      : null,
};

Summary.defaultProps = {
  title: '[무제]',
  ingredients: 0,
  steps: 0,
};

export default Summary;
