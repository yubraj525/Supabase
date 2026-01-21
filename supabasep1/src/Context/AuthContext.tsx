import React, { useEffect } from 'react'
import { createContext,useContext } from 'react'
import { supabase } from '../Config/CreateClient';
import type { User } from '@supabase/supabase-js';

type AuthContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    loading:boolean;
    setLoading: (loading: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider  ({children}: {children: React.ReactNode})  {
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
          supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
          });
    }, []);
  return (
<AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
    { !loading && children }     
</AuthContext.Provider>
      

  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};


