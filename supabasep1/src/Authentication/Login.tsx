import React from 'react'
import { supabase } from '../Config/CreateClient';

const Login = ({email, password}:{email: string, password: string}) => {
  return (
       supabase.auth.signInWithPassword({
      email: email,
      password: password,
  })
  .then((response) => {
      if (response.error) {
         return response.error.message;
      } else {
            return "Login successful";
      }
  })
  )
}

export default Login
