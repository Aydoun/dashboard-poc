import React, { memo } from "react";
import classNames from "classnames";
import { string, oneOf, bool } from "prop-types";
import "./Text.css";

const Text = props => {
  const { tag: Tag, color, size, className, children, bold } = props;

  const classes = classNames('text', className, {
    [`text--${color}`]: color,
    [`text--${size}`]: size,
    'text--bold': bold
  });

  return <Tag className={classes}>{children}</Tag>;
};

Text.propTypes = {
  tag: string,
  color: oneOf(["black", "lightblack", "gray"]),
  size: oneOf(["small", "medium", "big", "large", "x-large"]),
  className: string, 
  bold: bool,
};

Text.defaultProps = {
  tag: 'span',
  color: 'black',
  bold: false,
};

export default memo(Text);
