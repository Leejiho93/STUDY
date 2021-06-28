import React, { Component } from 'react';
import Star from './Star';

class StarRatingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: 0,
    };
    this.change = this.change.bind(this);
  }
  change(starsSelected) {
    this.setState({ starsSelected });
  }
  render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;
    return (
      <div>
        {[...Array(totalStars)].map((n, i) => {
          return (
            <Star
              key={i}
              selected={i < starsSelected}
              onClick={() => this.change(i + 1)}
            />
          );
        })}
        <p>
          별점: {starsSelected} / {totalStars}
        </p>
      </div>
    );
  }
}

StarRatingClass.defaultProps = {
  totalStars: 5,
};

export default StarRatingClass;
