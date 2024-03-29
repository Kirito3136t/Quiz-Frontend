import React, { useTransition } from 'react'
import { useState,useEffect } from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import { login,reset } from '../features/auth/authSlice'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner'


function Login() {
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  })

  const {email,password}=formData

  const dispatch=useDispatch()
  const {user,isSuccess,isError,isLoading,message}=useSelector(state=>state.auth)
  const navigate=useNavigate()

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    //redirect to home
    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())
  },[isError,isSuccess,user,message,dispatch,navigate])

  const onChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const onSubmit=(e)=>{
    e.preventDefault()

    const userData={
      email,
      password
    }

    dispatch(login(userData))
    
  }

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <section className='heading'>
        <h1>
          Login
        </h1>
        <p>Please create an account</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={email}
                onChange={onChange}
                placeholder='Enter your email'
                required
              />
          </div>
          <div className='form-group'>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                value={password}
                onChange={onChange}
                placeholder='Enter password'
                required
              />
          </div>
          <div className='form-group'>
            <button 
            className='btn btn-block'
            >Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login