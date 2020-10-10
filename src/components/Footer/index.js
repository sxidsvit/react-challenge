import React from 'react'

class Footer extends React.Component {

  render() {
    const { style, date } = this.props
    return (
      <footer style={style}>
        <div className='footer-wrapper' >
          <p>Copyright {date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

export default Footer
