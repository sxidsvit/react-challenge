import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import isEmpty from 'validator/lib/isEmpty'

const styles = {
  app: {
    paddingLeft: '3rem'
  },
  error: {
    display: 'inline-block',
    color: 'red',
    fontSize: 10,
    paddingBottom: '1rem'
  },
  submit: {
    marginTop: '1rem'
  }
}

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

const selectOptions = options.map(({ value, label }) => (
  <option value={value} key={value}> {label}</option>
))

const App = () => {

  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    dateOfBirth: '',
    color: '',
    weight: '',
    country: '',
    gender: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    bio: '',
    file: '',
    touched: {}
  }

  const [formData, setFormData] = useState(initialFormData)

  const {
    firstName,
    lastName,
    email,
    tel,
    dateOfBirth,
    color,
    weight,
    country,
    gender,
    skills,
    bio,
    file,
    touched
  } = formData


  const handleChange = (e) => {

    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        skills: { ...skills, [name]: checked },
      })
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setFormData({ ...formData, touched: { ...touched, [name]: true } })
  }

  const validate = () => {
    const errors = {}
    if (
      (touched.firstName && !isLength(firstName, { min: 3, max: 15 }))
    ) {
      errors.firstName = 'First name must be between 2 and 12'
    }

    if (
      (touched.lastName && !isLength(lastName, { min: 3, max: 15 }))
    ) {
      errors.lastName = 'Last name must be between 2 and 15'
    }

    if (
      (touched.email && !isEmail(email))
    ) {
      errors.email = 'Should be valid email'
    }

    if (
      (touched.tel && !isLength(tel, { min: 7, max: 15 }))
    ) {
      errors.tel = 'Should be valid phone number'
    }

    if (
      (touched.dateOfBirth && !isLength(dateOfBirth, { min: 1 }))
    ) {
      errors.dateOfBirth = 'Please, choose your birthday '
    }

    if (
      (touched.color && !isLength(color, { min: 1 }))
    ) {
      errors.color = 'Please, choose your favorite color '
    }

    if (
      (touched.weight && !isLength(weight, { min: 1 }))
    ) {
      errors.weight = 'Please, choose your weight '
    }

    if (
      (touched.country && country.length < 1)
    ) {
      errors.country = 'Please, choose your country '
    }

    if (
      (touched.gender && isEmpty(gender))
    ) {
      errors.gender = 'Please, choose your gender '
    }

    if (
      ((
        touched.css
        || touched.html
        || touched.javascript
      )
        && skills.css === false
        && skills.html === false
        && skills.javascript === false
      )
    ) {
      errors.skills = 'Select your skills '
    }

    if (
      (touched.bio && !isLength(bio, { min: 5 }))
    ) {
      errors.bio = 'Please, write a little about yourself '
    }

    // !isLength(file, { min: 1 })  file.length < 1

    if (
      (touched.file && file.length < 1)
    ) {
      errors.file = 'File not attached yet  '
    }

    return errors
  }

  const handleSubmit = errors => (e) => {
    console.log('handleSubmit e: ', e);

    e.preventDefault()

    const validityCheck = Object.keys(errors).length ? false : true
    if (!validityCheck) {
      alert(`Form is not valid. Check all fields, please ...`)
      return
    }

    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      color,
      weight,
      country,
      gender,
      skills,
      bio,
      file,
    } = formData

    const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      tel,
      country,
      gender,
      dateOfBirth,
      weight,
      color,
      bio,
      file,
      skills: formattedSkills,
    }

    alert(JSON.stringify(data, null, 2))
    setFormData(
      {
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        dateOfBirth: '',
        color: '',
        weight: '',
        country: '',
        gender: '',
        skills: {
          html: false,
          css: false,
          javascript: false,
        },
        bio: '',
        file: '',
        touched: {}
      }
    )
  }

  const errors = validate()

  return (
    <div className='App' style={styles.app} >
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit(errors)}>
        <fieldset>
          <legend>React Form and Form Validation</legend>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <input
                type='text'
                name='firstName'
                value={firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='First Name'
              /> <br />
              <small style={styles.error}>{errors.firstName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <input
                type='text'
                name='lastName'
                value={lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Last Name'
              /> <br />
              <small style={styles.error}>{errors.lastName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Email'
              /><br />
              <small style={styles.error}>{errors.email}</small>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <input
              type='tel'
              name='tel'
              value={tel}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Tel'
            /><br />
            <small style={styles.error}>{errors.tel}</small>
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Date of Birth'
            /><br />
            <small style={styles.error}>{errors.dateOfBirth}</small>
          </div>
          <div className='form-group'>
            <label htmlFor='color'>Favorite Color</label>
            <input
              type='color'
              id='color'
              name='color'
              value={color}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Favorite Color'
            /><br />
            <small style={styles.error}>{errors.color}</small>
          </div>
          <div className='form-group'>
            <label htmlFor='weiht'>Weight </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={weight}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Weight in Kg'
            /><br />
            <small style={styles.error}>{errors.weight}</small>
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select
              type="select"
              id='country'
              name='country'
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {selectOptions}
            </select>
            <br />
            <small style={styles.error}>{errors.country}</small>
          </div>

          <div>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={handleChange}
                onBlur={handleBlur}
                checked={gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={handleChange}
                onBlur={handleBlur}
                checked={gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={handleChange}
                onBlur={handleBlur}
                checked={gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
            <br />
            <small style={styles.error}>{errors.gender}</small>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
            {/* <br /> */}
            <small style={styles.error}>{errors.skills}</small>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={bio}
              onChange={handleChange}
              onBlur={handleBlur}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
            <br />
            <small style={styles.error}>{errors.bio}</small>
          </div>

          <div>
            <input
              type='file'
              name='file'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <small style={styles.error}>{errors.file}</small>
          </div>
          <div style={styles.submit}>
            <button>Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)