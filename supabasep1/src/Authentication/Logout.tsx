import React from 'react'
import { supabase } from '../Config/CreateClient';
const Logout = () => {
supabase.auth.signOut().then((response) => {
    if (response.error) {
       return response.error.message;
    } else {
          return "Logout successful";
    }

})
}
export default Logout
