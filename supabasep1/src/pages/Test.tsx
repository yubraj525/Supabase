import React from "react";
import { useEffect } from "react";
import { supabase } from "./CreateClient";
const Test = () => {
  useEffect(() => {
    Testfetch();
  }, []);
  const [userData, setUserData] = React.useState([]);
  const [inputData, setInputData] = React.useState({
    userName: "",
    email: "",
    contact: "",
    password: "",
  });
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  }
   async function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Form submitted:", inputData);

      const { data:response , error } = await supabase
        .from("user")
        .insert([inputData]);
      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", response);
        Testfetch(); // Refresh the data after insertion
      }
    }
  


  
  async function Testfetch() {
    const { data, error } = await supabase.from("user").select("*");

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      console.log("Data fetched successfully:", data);
      setUserData(data);
    }
  }

  return (
    <div>
      <table className="m-auto ">
        <thead className="bg-gray-200 w-full ">
          <tr>

          <td className="thead ">Id</td>

          <td className="thead ">Name</td>
          <td className="thead ">Email</td>
          <td className="thead ">Contact</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((item: any) => (
            <tr key={item.id} className=" ">
              <td className="thead">{item.id}</td>

              <td className="thead">{item.userName}</td>
              <td className="thead">{item.email}</td>
              <td className="thead">{item.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full flex justify-center items-center mt-10">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <label
            htmlFor="userName"
            className="block mb-2 font-medium text-gray-700"
          >
            User Name:
          </label>
          <input
          onChange={(e)=>handleChange(e)}
            type="text"
            id="userName"
            name="userName"
            className="border border-gray-300 rounded-md p-2  mb-4"
          />
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-gray-700"
          >
            Email:
          </label>
          <input
          onChange={(e)=>handleChange(e)}
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-md p-2  mb-4"
          />
          <label
            htmlFor="contact"
            className="block mb-2 font-medium text-gray-700"
          >
            Contact:
          </label>
          <input
          onChange={(e)=>handleChange(e)}
            type="text"
            id="contact"
            name="contact"
            className="border border-gray-300 rounded-md p-2  mb-4"
          />
          <label
            htmlFor="password"
            className="block mb-2 font-medium text-gray-700"
          >
            Password:
          </label>
          <input
          onChange={(e)=>handleChange(e)}
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-md p-2  mb-4"
          />
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2 w-full hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Test;
