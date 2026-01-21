import React from 'react'
import { supabase } from '../Config/CreateClient';

const Test = () => {
    supabase.auth.getSession().then(({ data }) => {
    console.log(" friom test page>>", data.session?.user);
    });
  return (
    <div className='h-12 w-12 bg-blue-500'>
      hello
    </div>
  )
}

export default Test
