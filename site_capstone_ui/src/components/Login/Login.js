import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import Card from '../Card/Card';
import PageH from '../PageH/PageH'
import apiClient from "../../services/apiClient"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../contexts/ThemeContext";
const eye = <FontAwesomeIcon icon={faEye} />;


export default function Login({ setAppState, user }) {
  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.light : context.dark;
  const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;

  const ThemeToggler = (props) => {
      const context = useContext(ThemeContext);
      const btnText = context.isLightTheme ? "Light ☀️" : "Dark 🌘";
      const toggleTheme = context.toggleTheme;
    
      return (
        <button className={`button is-light rounded`} onClick={toggleTheme}>
          {btnText}
        </button>
      );
    };
  
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [passwordShown, setPasswordShown] = useState(false);
    const [form, setForm] = useState({
      username: '',
      password: ''
    })

    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

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

      if (data) {
        setAppState((a) => ({...a, user: data.user}))
        apiClient.setToken(data.token)
      }

      if (error) {
        setErrors((e) => ({ ...e, form: error }))
        console.log(errors)
        setIsLoading(false)
        return
      }


      setIsLoading(false)
      navigate("/")
    }

    

    return (
      <div className={` ${theme} `}>
      <div className={theme}>
      <div className="Login">
        <div className="splash-image" style={{ backgroundImage: `url(https://images.pexels.com/photos/6061396/pexels-photo-6061396.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)` }}>
        <ThemeToggler />
        <Card className ={`login-card ${theme}`}>
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
              type={passwordShown ? "text" : "password"} 
              name='password' 
              placeholder='password' 
              value={form.password} 
              onChange={handleOnInputChange}/>
              {errors.password && <span className="error">{errors.password}</span>}
              <div className="showBtn"> 
                <i onClick={togglePasswordVisiblity}>Show password {eye} </i>
              </div>

            </div>
            <div className='login-footer'>
                <p>Don't have an account? Sign up <Link to="/register">here</Link></p>
            </div>
            {errors.form && <span className="error">{errors.form}</span>}
            <button className='login-btn' disabled= {isLoading} onClick={handleOnSubmit}>
              {isLoading ? <>Loading</> : <>Login</>}
            </button>
          </div>
        </div>
   
        </Card>
        </div>
      </div>
      </div>
      </div>
    )
  }