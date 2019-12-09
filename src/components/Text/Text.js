import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { string, oneOf } from 'prop-types';
import './Text.css';

class Text extends PureComponent {
  static defaultProps = {
    tag: 'span',
  };

  static propTypes = {
    tag: string,
    color: oneOf(['black', 'purple']),
    size: oneOf(['small', 'regular', 'large', 'x-large', 'xx-large']),
    weight: oneOf(['thin', 'bold', 'black']),
    value: string,
    className: string,
  };

  render() {
    const {
      tag: Tag,
      color,
      size,
      weight,
      value,
      className,
      children,
    } = this.props;
    const CLASS_ROOT = 'text';

    const classes = classNames(CLASS_ROOT, className, {
      [`${CLASS_ROOT}--${size}`]: size,
      [`${CLASS_ROOT}--${weight}`]: weight,
      [`${CLASS_ROOT}--c-${color}`]: color,
    });

    return (
      <Tag value={value} className={classes} >{children}</Tag>
    );
  }
}

export default Text;
