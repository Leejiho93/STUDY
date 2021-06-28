import React, { Component } from 'react';
import Expandable from './Expandable';

class MenuButton extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    const collapsed =
      nextProps.collapsed && nextProps.collapsed === true ? true : false;
    this.setState({ collapsed });
  }
  render() {
    const { children, collapsed, txt, expandCollapse } = this.props;
    return (
      <div>
        <button onClick={expandCollapse}>{txt}</button>
        {!collapsed ? <div>{children}</div> : ''}
      </div>
    );
  }
}

const PopUpButton = Expandable(MenuButton);

export default PopUpButton;
