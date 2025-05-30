import CommonForm from '@/components/common/form'
import { loginformControls} from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {


  const initialState={
    
    email:"",
    password:""
  }
   const [formData,setFormData] = useState(initialState)

   const onSubmit =()=>{

   }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>
         Sign in to your account
        </h1>
        <p className='mt-2 '>Dont have an account?</p>
        <Link className='font-medium ml-5 text-primary hover:underline' to="/auth/register">Register</Link>
      </div>
      <CommonForm formControls={loginformControls}
      buttonText={"Sign in"}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      />
    </div>
  )
}

export default Login