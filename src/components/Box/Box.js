import React, { memo } from "react";
import classNames from "classnames";
import { string, node } from "prop-types";
import Text from "../Text";
import "./Box.css";

const Box = props => {
  const { title, extra, children, className } = props;
  const classes = classNames("box__content", className);

  return (
    <div className="box">
      {title && (
        <div className="box__info">
          <Text tag="h4" color="lightblack">
            {title}
          </Text>
          <div>{extra}</div>
        </div>
      )}
      <div className={classes}>{children}</div>
    </div>
  );
};

Box.propTypes = {
  title: string,
  className: string,
  extra: node,
  children: node
};

export default memo(Box);
