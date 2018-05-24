import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default ({ children }) => (
  <ReactCSSTransitionGroup
    transitionAppear
    transitionAppearTimeout={600}
    transitionEnterTimeout={600}
    transitionLeaveTimeout={200}
    transitionName="SlideIn"
  >
    {children}
  </ReactCSSTransitionGroup>
);
