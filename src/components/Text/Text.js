import React, { memo } from "react";
import classNames from "classnames";
import { string, oneOf } from "prop-types";
import "./Text.css";

const Text = props => {
  const { tag: Tag, color, className, children } = props;

  const CLASS_ROOT = 'text';
  const classes = classNames(CLASS_ROOT, className, {
    [`${CLASS_ROOT}--${color}`]: color
  });

  return <Tag className={classes}>{children}</Tag>;
};

Text.propTypes = {
  tag: string,
  color: oneOf(["black", "lightblack"]),
  className: string
};

Text.defaultProps = {
  tag: 'span',
  color: 'black',
};

export default memo(Text);
