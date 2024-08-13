import React from 'react'
// ^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$
// /
// i
// ^ asserts position at start of the string
// Match a single character present in the list below [A-Z0-9._%+-]
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case insensitive)
// 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case insensitive)
// ._%+- matches a single character in the list ._%+- (case insensitive)
// @ matches the character @ with index 6410 (4016 or 1008) literally (case insensitive)
// Match a single character present in the list below [A-Z0-9.-]
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case insensitive)
// 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case insensitive)
// .- matches a single character in the list .- (case insensitive)
// \. matches the character . with index 4610 (2E16 or 568) literally (case insensitive)
// Match a single character present in the list below [A-Z]
// {2,} matches the previous token between 2 and unlimited times, as many times as possible, giving back as needed (greedy)
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case insensitive)
// $ asserts position at the end of the string, or before the line terminator right at the end of the string (if any)
// Global pattern flags 
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])

import { useFormik } from 'formik'

const initialValues = {
  fullname: '',
  email: '',
  password: ''
}


const onSubmit = values => {
  console.log('formData', values);
}

const validate = values => {
  let error = {}

  if (!values.fullname) {
    error.fullname = 'Required'
  }
  if (!values.email) {
    error.email = 'Required'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'Invalid Email Address'
  }
  if (!values.password) {
    error.password = 'Required'
  }

  return error
}


const Form1 = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  console.log('formik Data', formik.values);
  console.log('formik error', formik.errors);

  return (
    <div className='flex h-lvh items-center justify-center'>
      <div className='bg-purple-500 p-12  rounded-3xl'>
        <form className='flex flex-col w-96' onSubmit={formik.handleSubmit}>
          <figcaption className='text-center mb-4 text-2xl font-semibold text-white'>React Formik Form</figcaption>
          <div className=''>
            <label className='text-white mb-2 block text-lg font-semibold' htmlFor="fullname">FullName</label>
            <input className='focus:outline-none ps-2 w-full py-2 rounded-full mb-4' type="text" name="" id="fullname" value={formik.values.fullname} onChange={formik.handleChange} />
            {
              formik.errors.fullname ? <div className='bg-white'>{formik.errors.fullname}</div> : null
            }
          </div>
          <div className=''>
            <label className='text-white mb-2 block text-lg font-semibold' htmlFor="email">Email</label>
            <input className='focus:outline-none ps-2 w-full py-2 rounded-full mb-4' type="email" name="" id="email" value={formik.values.email} onChange={formik.handleChange} />
            {
              formik.errors.email ? <div className='bg-white' >{formik.errors.email}</div> : null
            }
          </div>
          <div className=''>
            <label className='text-white mb-2 block text-lg font-semibold' htmlFor="password">Password</label>
            <input className='focus:outline-none ps-2 w-full py-2 rounded-full mb-4' type="password" name="" id="password" value={formik.values.password} onChange={formik.handleChange} />
            {
              formik.errors.password ? <div className='bg-white'>{formik.errors.password}</div> : null
            }
          </div>
          <button className='btn rounded-full' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form1
