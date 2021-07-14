import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css"
import Card from '../Card/Card';
import API from '../../services/apiClient';
import PageH from '../PageH/PageH'



export default function Login({handleLogIn, setAppState }) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
      username: '',
      password: ''
    })
  
    const handleOnInputChange = (event) => {
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }
  
    const handleOnSubmit = async (event) => {
      event.preventDefault()
      setIsLoading(true)
      setErrors((e) => ({ ...e, form: null }))
  
      const { data, error } = await API.loginUser({ email: form.username, password: form.password })
      if (data) {
        API.setToken(data.token)
        setAppState((a) => ({...a, user: data.user}))
      }
      if (error) {
        console.log(errors)
        setErrors((e) => ({ ...e, form: error }))
        setIsLoading(false)
        return
      }
      setIsLoading(false)
      navigate("/home")
    }

    return (
      <div className="Login">
        <div className="splash-image" style={{ backgroundImage: `url(https://images.pexels.com/photos/6061396/pexels-photo-6061396.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)` }}>
        <Card className ="login-card">
        <PageH sectionName='Login'/>
        <div className='form'>
          <div className='form-fields'>
            <div className='form-input'>
              <label align='left' htmlFor='email'>Username</label>
              <input 
              type='username' 
              name='username' 
              placeholder='user123' 
              value={form.email} 
              onChange={handleOnInputChange}/>
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div className='form-input'>
              <label align='left' htmlFor='password'>Password</label>
              <input 
              type='password' 
              name='password' 
              placeholder='password' 
              value={form.password} 
              onChange={handleOnInputChange}/>
            </div>
            {errors.form && <span className="error">{errors.form}</span>}
            <button className='login-btn' onClick={handleOnSubmit}>
              {isLoading ? <>Loading</> : <>Login</>}
            </button>
          </div>
        </div>
        <div className='login-footer'>
          <p>Don't have an account? Sign up <Link to="/register">here</Link></p>
        </div>
        </Card>
        </div>
      </div>
    )
  }