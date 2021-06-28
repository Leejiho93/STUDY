import React from 'react';
import Expandable from './Expandable';
import XRegExp from 'xregexp';

const Letter = XRegExp('\\pL', 'g');

const ShowHideMessage = ({ children, collapsed, expandCollapse }) => {
  return (
    <p onClick={expandCollapse}>
      {collapsed ? children.replace(Letter, 'x') : children}
    </p>
  );
};

const HiddenMessage = Expandable(ShowHideMessage);

export default HiddenMessage;
