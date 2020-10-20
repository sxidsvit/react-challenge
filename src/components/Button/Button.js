import React, { Component } from 'react'

export class Button extends Component {

  render() {
    const { origin, itemsNumber } = this.props

    const styles = {
      button: {
        border: "1px solid #b9b7b7",
        padding: "10px 15px",
        textTransform: "uppercase",
        margin: "10px 10px",
        fontFamily: "Roboto",
        fontSize: "23px",
        fontWeight: "400",
        borderRadius: "2px",
        cursor: "pointer",
      }
    }
    return (
      <div>
        <button
          type="button"
          className="btn btn-light"
          style={styles.button}>
          {origin}&nbsp;({itemsNumber})
        </button>
      </div>
    )
  }
}

export default Button
