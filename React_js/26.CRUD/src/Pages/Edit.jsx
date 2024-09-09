import React from 'react'
import { ArrowLeft } from 'lucide-react'
import axios from 'axios'
import { useState ,useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

  const [student ,setstudent] = useState({
    
    fullName: '',
    email: '',
    phoneNo: '',
    age: '',
    Image: ''
    
  })
  const { id } = useParams();
  const navigate = useNavigate()
  
  useEffect(() => {
     axios.get('http://localhost:3000/student/' + id)
     .then(res => {
      setstudent(res.data)})
     .catch(err => console.log(err))
  }, [])

  const handleImageChange = (e) => {
    const file= e.target.files[0]
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setstudent({...student , Image:reader.result})
      }
      reader.readAsDataURL(file)
    }
  }

  const onUpdateStudent = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3000/student/'+id,student)
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
            Update Student
          </h2>
          
          <form action="#" method="POST" className="mt-8" onSubmit={onUpdateStudent}>
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
                    value={student.fullName}
                    onChange={e => setstudent({...student, fullName: e.target.value})}
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
                    value={student.email}
                    onChange={e => setstudent({...student, email: e.target.value})}
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
                    name="phoneNo"
                    value={student.phoneNo}
                    onChange={e => setstudent({...student, phoneNo:e.target.value})}
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
                    value={student.age}
                    onChange={e => setstudent({...student, age:e.target.value})}
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
                    // value={student.Image}
                    onChange={handleImageChange}
                  ></input>
                </div>
              </div>
              
              <div className="flex gap-10">

              <Link to="/">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Back <ArrowLeft className="ml-2" size={16} />
                </button>
              </Link>
                <button
                  type="Submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Update Student 
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Edit
