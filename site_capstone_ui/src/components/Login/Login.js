import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import Card from '../Card/Card';
import PageH from '../PageH/PageH'
import apiClient from "../../services/apiClient"



export default function Login({handleLogIn, setAppState, user, setUser }) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
      username: '',
      password: ''
    })

    useEffect(() => {
      if (user?.username) {
        navigate("/")
      }
    }, [user,navigate])
  
    const handleOnInputChange = (event) => {
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }
  
    const handleOnSubmit = async (event) => {
      event.preventDefault()
      setIsLoading(true)
      setErrors((e) => ({ ...e, form: null }))
  
      const { data, error } = await apiClient.loginUser({ username: form.username, password: form.password })

      if (error) {
        setErrors((e) => ({ ...e, form: error }))
      }

      if (data) {
        setAppState((a) => ({...a, user: data.user}))
        apiClient.setToken(data.token)
      }

      setIsLoading(false)
      navigate("/")
    }

    return (
      <div className="Login">
        <div className="splash-image" style={{ backgroundImage: `url(https://images.pexels.com/photos/6061396/pexels-photo-6061396.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)` }}>
        <Card className ="login-card">
        <PageH sectionName='Login'/>
        <div className='formL'>
          <div className='formL-fields'>
            <div className='formL-input'>
              <label align='left' htmlFor='username'>Username</label>
              <input 
              type='username' 
              name='username' 
              placeholder='user123' 
              value={form.username} 
              onChange={handleOnInputChange}/>
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div className='formL-input'>
              <label align='left' htmlFor='password'>Password</label>
              <input 
              type='password' 
              name='password' 
              placeholder='password' 
              value={form.password} 
              onChange={handleOnInputChange}/>
            </div>
            <div className='login-footer'>
                <p>Don't have an account? Sign up <Link to="/register">here</Link></p>
            </div>
            {errors.form && <span className="error">{errors.form}</span>}
            <button className='login-btn' onClick={handleOnSubmit}>
              {isLoading ? <>Loading</> : <>Login</>}
            </button>
          </div>
        </div>
   
        </Card>
        </div>
      </div>
    )
  }