import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.css';

class ButtonGroup extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
  }

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  render() {
    return (
      <div className="ButtonGroup">
        <p>{this.props.label}</p>
        {React.Children.map(this.props.children, (child, index) =>
          React.cloneElement(child, {
            onClick: () => {
              this.setState({ activeIndex: index });
              this.props.onChange(index);
            },
          }),
        )}
      </div>
    );
  }
}

export default ButtonGroup;
