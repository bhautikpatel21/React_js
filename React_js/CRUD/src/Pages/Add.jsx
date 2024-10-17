import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Add = () => {

const navigate = useNavigate()
const [Student, setStudent] = useState({
  
  fullName: '',
  email: '',
  phoneNo: '',
  age: '',
  Image: ''

})

   const handleImageChange = (e) => {
    const file= e.target.files[0]
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudent({...Student , Image:reader.result})
      }
      reader.readAsDataURL(file)
    }
  }


   const onSubmitStudent = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/student",Student)
    .then(res => {
      console.log(res);
      navigate('/')
    })
  }



  return (
    <section className="rounded-md ">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 ">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
  
          <h2 className="text-2xl font-bold leading-tight text-black">
            ADD Student
          </h2>
          
          <form action="#" method="POST" className="mt-8" onSubmit={onSubmitStudent}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Full Name{" "}
                  
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter Your Name"
                    id="fullName"
                    name="fullName"
                    onChange={e => setStudent({...Student, fullName: e.target.value})}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email{" "}
                  
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Enter Your Email"
                    id="email"
                    name="email"
                    onChange={e => setStudent({...Student, email: e.target.value})}
                  ></input>
                </div>
              </div> 
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Phone Number{" "}
                  
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Enter Your Number"
                    name="phoneNO"
                    onChange={e => setStudent({...Student, phoneNo:e.target.value})}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Age{" "}
                  
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Enter Your age"
                    name="age"
                    onChange={e => setStudent({...Student, age:e.target.value})}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Image{" "}
                 
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                    placeholder="Select photo"
                    name="Image"
                    onChange={handleImageChange}
                  ></input>
                </div>
              </div>
              
              <div className="flex gap-10">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Back <ArrowLeft className="ml-2" size={16} />
                </button>
                <button
                  type="Submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  ADD Student 
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Add;
