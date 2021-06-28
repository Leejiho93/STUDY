import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

class ColorClass extends Component {
  constructor(props) {
    super(props);
    this.h1 = createRef();
  }

  componentDidMount() {
    console.log('this: ', this);
  }

  UNSAFE_componentWillMount() {
    this.style = { backgroundColor: '#CCC' };
  }

  UNSAFE_componentWillUpdate(prevProps) {
    if (this.props.rating !== prevProps.rating) {
      this.style = null;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { title, rating } = this.props;
    if (prevProps.rating !== rating) {
      alert(`${title}: 평점 ${prevProps.rating} -> ${rating}`);
    }
  }

  render() {
    const { title, color, rating, onRemove, onRate } = this.props;
    return (
      <section style={this.style}>
        <h1 ref={this.h1}>{title}</h1>
        <button className="removeBtn" onClick={onRemove}>
          X
        </button>
        <div className="color" style={{ backgroundColor: color }}></div>
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    );
  }
}

ColorClass.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func,
};

ColorClass.defaultProps = {
  title: undefined,
  rating: 0,
  onRate: f => f,
};

export default ColorClass;
