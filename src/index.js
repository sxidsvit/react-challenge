import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Input = (props) => {
  console.log('props', props)
  const { style, options: { type, hendlers, placeholder, label, id } } = props
  return (
    <div className="form-group  m-4 w-25">
      <label htmlFor={id} className="text-center">{label}</label>
      <input className="form-control" id={id}
        type={type}
        style={style}
        {...hendlers}
        placeholder={placeholder}
        aria-label="Username" aria-describedby="basic-addon1" />
    </div>
  )
}

const InputWithSuperPower = (CompParam, options = {}) => {
  console.log('InputWithSuperPower - options: ', options);

  const inputStyles = {
    backgroundColor: '#e7e7e7',
    padding: '20px 35px',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: '1.25rem',
    color: 'green'
  }

  return (props) => {
    return <CompParam
      style={{ ...inputStyles, ...options.style }}
      options={options} />
  }
}

const TextInput = InputWithSuperPower(Input,
  {
    type: 'text',
    style: { borderRadius: '20px', color: 'green', border: '2px solid green' },
    hendlers: {
      onClick: () => console.log('Text. You clicked inside mу ...'),
      onBlur: () => console.log('Text. Fockus is lost ...')
    },
    placeholder: 'First name',
    label: 'Your name',
    id: 1
  })

const EmailInput = InputWithSuperPower(Input,

  {
    type: 'email',
    style: { borderRadius: '10px', color: 'blue', border: '2px solid blue' },
    hendlers: {
      onClick: () => console.log('Email. You clicked inside mу ...'),
    },
    placeholder: 'email',
    label: 'Your email',
    id: 2
  })

const PasswordInput = InputWithSuperPower(Input,

  {
    type: 'password',
    style: { borderRadius: '10px', color: 'orange', border: '2px solid orange' },
    hendlers: {
      onClick: () => console.log('Password. You clicked inside mу ...'),
    },
    placeholder: 'password',
    label: 'Your password',
    id: 3
  })


class App extends Component {
  render() {

    return (
      <div className='App'>
        <TextInput />
        <EmailInput />
        <PasswordInput />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)