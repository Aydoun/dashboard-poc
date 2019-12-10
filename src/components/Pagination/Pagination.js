import React, { PureComponent } from "react";
import classNames from "classnames";
import { array, number } from "prop-types";
import "./Pagination.css";

class Pagination extends PureComponent {
  static propTypes = {
    collection: array,
    initialCheck: number,
  };

  static defaultProps = {
    collection: [],
  };

  state = {
    checked: this.props.initialCheck,
  };

  onChecked = index => () => {
    this.setState({ checked: index });
  }

  render() {
    const { collection } = this.props;
    const { checked } = this.state;
    const collectionWithAll = ["All", ...collection];

    return (
      <div>
        {collectionWithAll.map((item, index) => (
          <span 
            className={classNames('pagination__index', {
              'pagination__index--checked': index === checked
            })}
            onClick={this.onChecked(index)}
          >
            {item}
          </span>
        ))}
      </div>
    );
  }
}

export default Pagination;
