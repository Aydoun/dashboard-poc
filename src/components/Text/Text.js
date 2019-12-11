import React, { memo } from "react";
import classNames from "classnames";
import { string, oneOf } from "prop-types";
import "./Text.css";

const Text = props => {
  const { tag: Tag, color, size, className, children } = props;

  const classes = classNames(className, {
    [`text--${color}`]: color,
    [`text--${size}`]: size
  });

  return <Tag className={classes}>{children}</Tag>;
};

Text.propTypes = {
  tag: string,
  color: oneOf(["black", "lightblack", "gray"]),
  size: oneOf(["small", "medium", "big", "large", "x-large"]),
  className: string
};

Text.defaultProps = {
  tag: 'span',
  color: 'black',
};

export default memo(Text);
