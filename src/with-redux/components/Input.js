import React, { Component } from "react";

export class Input extends Component {
  render() {
      const {value, onChange, onBlur} = this.props.input;
      const {error = [], touched} = this.props.meta;
      return (
          <label >
              {this.props.label}
              {this.props.children({
                  value,
                  placeholder: this.props.placeholder,
                  onChange,
                  onBlur
              })}
              {touched && error.map((error, i) => <div key={i}>{error}</div>)}
          </label>
      );
  }
}
