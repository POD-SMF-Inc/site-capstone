import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Register.css";
import Card from '../Card/Card';
import { useNavigate } from "react-router-dom"
import apiClient from "../../services/apiClient"
import PageH from '../PageH/PageH'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Register({ user, setUser, setAppState }) {
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
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


  useEffect(() => {
    if (user?.username) {
      navigate("/")
    }
  }, [user, navigate])

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

  const handleOnSubmit = async () => {
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

    const { data, error } = await apiClient.signupUser({
      email: form.email,
      password: form.password,
      username: form.username,
      first_name: form.first_name,
      last_name: form.last_name
    })

    if (error) {
      setErrors((e) => ({ ...e, form: error }))
    }

    if (data) {
      setAppState((a) => ({...a, user: data.user}))
      apiClient.setToken(data.token)
    }

    setIsLoading(false)
    navigate("/survey")
  }
  return (
    <div className={`registerp ${theme} `}>
    <div className={theme}>
    
    <div className="Register">
      <div className="splash-image " style={{ backgroundImage: `url(https://images.pexels.com/photos/4033636/pexels-photo-4033636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)` }}>
      <ThemeToggler />
      <Card className ={`registercard ${theme}`}>
      <PageH sectionName='Create an Account '/>
      <div className='formR'>
        <div className='formR-fields'>
          <div className='formR-input-name'>
            <div className='formR-input'>
              <label align='left' htmlFor='name'>First Name</label>
              <input 
              type='text' 
              name='first_name' 
              placeholder='John' 
              value={form.first_name} 
              onChange={handleOnInputChange} />
            </div>
            <div align='left' className='formR-input'>
              <label htmlFor='name'>Last Name</label>
              <input 
              type='text' 
              name='last_name' 
              placeholder='Doe' 
              value={form.last_name} 
              onChange={handleOnInputChange} />
            </div>
          </div>

          <div className='formR-input'>
              <label align='left' htmlFor='name'>Username</label>
              <input 
              type='text' 
              name='username' 
              placeholder='your_username' 
              value={form.username} 
              onChange={handleOnInputChange} />
            </div>
        
          <div className="formR-input">
            <label align='left' htmlFor="email">Email</label>
            <input 
            type="email" 
            name="email" 
            placeholder="user@codepath.org" 
            value={form.email} 
            onChange={handleOnInputChange}/>
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>

          <div className="formR-input">
            <label align='left' htmlFor="password">Password</label>
            <input 
            type={passwordShown ? "text" : "password"} 
            name="password" 
            placeholder="password" value={form.password} 
            onChange={handleOnInputChange}/>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="formR-input">
            <label align='left' htmlFor="passwordConfirm">Confirm Password</label>
            <input 
            type={passwordShown ? "text" : "password"} 
            name="passwordConfirm"
             placeholder="confirm password "  
             value={form.passwordConfirm} 
             onChange={handleOnInputChange}/>
            {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
            
            <div className="showBtn"> 
            <i onClick={togglePasswordVisiblity}>Show password {eye} </i>
            </div>

          </div>
         
          
          <p className="to-login">
                         Already have an account? Login <Link to="/login">here.</Link>
          </p>
          {errors.form && <span className="error">{errors.form}</span>}
          <button className={`signup-btn `} onClick={handleOnSubmit}>
            {isLoading ? <>Loading</> : <>Register</>}
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
