import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  fullname: '',
  email: '',
  password: ''
}


const onSubmit = values => {
  console.log('formData', values);
}

// const validate = values => {
//   let error = {}

//   if (!values.fullname) {
//     error.fullname = 'Required'
//   }
//   if (!values.email) {
//     error.email = 'Required'
//   }
//   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     error.email = 'Invalid Email Address'
//   }
//   if (!values.password) {
//     error.password = 'Required'
//   }

//   return error
// }

const validationSchema =Yup.object({
    fullname:Yup.string().required('Required'),
    email:Yup.string().email('Invalid Email Address!!!').required('Required'),
    password:Yup.string().required('Required'),
})


const Form2 = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
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

export default Form2
