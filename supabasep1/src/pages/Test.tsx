import React from 'react'
import { useEffect } from 'react'
import { supabase } from './CreateClient'
const Test = () => {
    
      useEffect(() => {
        Testfetch();
      }, []);
    const [userData, setUserData] = React.useState([]);
      async function Testfetch() {
        const { data, error } = await supabase
          .from('user')
          .select('*');
          
    
        if (error) {
          console.error('Error fetching data:', error);
        } else {
          console.log('Data fetched successfully:', data);
            setUserData(data);
        }
      }

  return (
    <div>
      <table className='w-auto text-left  border-collapse border border-gray-400 space-x-4'>
        <thead className='bg-gray-200 '>
            <th className='w-20  '>Id</th>

            <th className='w-20  '>Name</th>
            <th>Email</th>
            <th>Contact</th>
        </thead>
        <tbody> 
        {userData.map((item:any) => (
            <tr key={item.id} className=' '>
                <td className=''>{item.id}</td>
     
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
            </tr>
        ))}
        </tbody>

      </table>
    </div>
  )
}

export default Test
