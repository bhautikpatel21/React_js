import React from 'react'
import { Formik , Form  , Field , ErrorMessage, validateYupSchema } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  fullname: '',
  email: '',
  password: '' 
}

const onSubmit = values => {
  console.log('formData', values);
}

const validationYupSchema =Yup.object({
    fullname:Yup.string().required('Required'),
    email:Yup.string().email('Invalid Email Address!!!').required('Required'),
    password:Yup.string().required('Required'),
})

const Form2 = () => {

  return (
    <div className='flex h-lvh items-center justify-center'>
      <div className='bg-purple-500 p-12  rounded-3xl'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validateYupSchema}>
        <Form className='flex flex-col w-96'>
          <figcaption className='text-center mb-4 text-2xl font-semibold text-white'>React Formik Form</figcaption>
          <div className=''>
            <label className='text-white mb-2 block text-lg font-semibold' htmlFor="fullname">FullName</label>
            <Field className='focus:outline-none ps-2 w-full py-2 rounded-full mb-4' type="text" name="" id="fullname"/>
            <ErrorMessage name='fullname'></ErrorMessage>
          </div>
          <div className=''>
            <label className='text-white mb-2 block text-lg font-semibold' htmlFor="email">Email</label>
            <Field className='focus:outline-none ps-2 w-full py-2 rounded-full mb-4' type="email" name="" id="email"/>
            <ErrorMessage name='email'></ErrorMessage>
          </div>
          <div className=''>
            <label className='text-white mb-2 block text-lg font-semibold' htmlFor="password">Password</label>
            <Field className='focus:outline-none ps-2 w-full py-2 rounded-full mb-4' type="password" name="" id="password"/>
            <ErrorMessage name="password"></ErrorMessage>
          </div>
          <button className='btn rounded-full' type='submit'>Submit</button>
        </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Form2
