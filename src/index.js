
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  // declaring state
  state = {
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  }
  handleChange = (e) => {
    /*
    // we can get the name and value like this but we can also destructure it from e.target
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value } = e.target
    // [variablename] this we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    // stops the default behavior of form element specifically refreshing of page
    e.preventDefault()
    console.log(JSON.stringify(this.state, null, 2))
  }

  render() {
    // accessing the state value by destrutcturing the state
    const { firstName, lastName, title, country } = this.state
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              value={country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={title}
              onChange={this.handleChange}
            />
          </div>

          <button onClick={this.changeAnimal} class='btn btn-success'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
