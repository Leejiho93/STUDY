import React, { Component } from 'react';
import XRegExp from 'xregexp';

const Letter = XRegExp('\\pL', 'g');

class HiddenMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: typeof props.hide === 'boolean' ? props.hide : true,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.hide !== prevProps.hide) {
      this.setState({
        hidden: this.props.hide,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { hidden } = this.state;
    return <p>{hidden ? children.replace(Letter, 'x') : children}</p>;
  }
}

export default HiddenMessage;
