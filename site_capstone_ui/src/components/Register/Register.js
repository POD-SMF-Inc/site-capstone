import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Card from '../Card/Card';
import { useNavigate } from "react-router-dom"
import API from '../../services/apiClient'
import PageH from '../PageH/PageH'


export default function Register({ setAppState }) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const handleOnInputChange = (event) => {
    setErrors((e) => ({ ...e, form: null }))
    // check that password confirm is equal to password
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    // check that password is equal to password confirm
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }

    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") <= 0) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async (event) => {
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    // check that the password and email fields are valid before registering user
    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
      return
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }))
    }

    if (form.email.indexOf("@") <= 0) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
        return
    } else {
      setErrors((e) => ({ ...e, email: null }))
    }

    const { data, error } = await API.signupUser({
      email: form.email,
      password: form.password,
      username: form.username,
      firstName: form.firstName,
      lastName: form.lastName
    })
    if (data) {
      API.setToken(data.token)
      setAppState((a) => ({...a, user: data.user}))
    }
    if (error) {
      setErrors((e) => ({ ...e, form: error }))
      setIsLoading(false)
      return
    }

    setIsLoading(false)
    navigate("/activity")
  }

  return (
    <div className="Register">
      <div className="splash-image" style={{ backgroundImage: `url(https://images.pexels.com/photos/4033636/pexels-photo-4033636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)` }}>
    
      <Card className ="register-card">
      <PageH sectionName='Create an Account'/>
      <div className='form'>
        <div className='form-fields'>
          <div className='form-input-name'>
            <div className='form-input'>
              <label align='left' htmlFor='name'>First Name</label>
              <input 
              type='text' 
              name='firstName' 
              placeholder='John' 
              value={form.firstName} 
              onChange={handleOnInputChange} />
            </div>
            <div align='left' className='form-input'>
              <label htmlFor='name'>Last Name</label>
              <input 
              type='text' 
              name='lastName' 
              placeholder='Doe' 
              value={form.lastName} 
              onChange={handleOnInputChange} />
            </div>
          </div>

          <div className='form-input'>
              <label align='left' htmlFor='name'>Username</label>
              <input 
              type='text' 
              name='username' 
              placeholder='your_username' 
              value={form.username} 
              onChange={handleOnInputChange} />
            </div>
        
          <div className="form-input">
            <label align='left' htmlFor="email">Email</label>
            <input 
            type="email" 
            name="email" 
            placeholder="user@codepath.org" 
            value={form.email} 
            onChange={handleOnInputChange}/>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-input">
            <label align='left' htmlFor="password">Password</label>
            <input 
            type="password" 
            name="password" 
            placeholder="password" value={form.password} 
            onChange={handleOnInputChange}/>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="form-input">
            <label align='left' htmlFor="passwordConfirm">Confirm Password</label>
            <input 
            type="password" 
            name="passwordConfirm"
             placeholder="confirm password" 
             value={form.passwordConfirm} 
             onChange={handleOnInputChange}/>
            {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
          </div>
          <p className="to-login">
                         Already have an account? Login <Link to="/login">here.</Link>
          </p>
          {errors.form && <span className="error">{errors.form}</span>}
          <button className='signup-btn' onClick={handleOnSubmit}>
            {isLoading ? <>Loading</> : <>Register</>}
          </button>
        </div>
        </div>
        </Card>
      </div>
    </div>
  )
}
