import React from 'react'
import { useFormik , Formik , Form  , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  fullname: '',
  email: '',
  password: ''
}

const onSubmit = values => {
  console.log('formData', values);
}

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
        <Formik>
        <Form className='flex flex-col w-96' onSubmit={formik.handleSubmit}>
          <figcaption className='text-center mb-4 text-2xl font-semibold text-white'>React Formik Form</figcaption>
          <div className=''>
            <label className='text-white mb-2 block text-lg font-semibold' htmlFor="fullname">FullName</label>
            <Field className='focus:outline-none ps-2 w-full py-2 rounded-full mb-4' type="text" name="" id="fullname" value={formik.values.fullname} onChange={formik.handleChange} />
            {
              formik.errors.fullname ? <div className='bg-white'>{formik.errors.fullname}</div> : null
            }
            <ErrorMessage></ErrorMessage>
          </div>
          <div className=''>
            <label className='text-white mb-2 block text-lg font-semibold' htmlFor="email">Email</label>
            <Field className='focus:outline-none ps-2 w-full py-2 rounded-full mb-4' type="email" name="" id="email" value={formik.values.email} onChange={formik.handleChange} />
            {
              formik.errors.email ? <div className='bg-white' >{formik.errors.email}</div> : null
            }
            <ErrorMessage></ErrorMessage>
          </div>
          <div className=''>
            <label className='text-white mb-2 block text-lg font-semibold' htmlFor="password">Password</label>
            <Field className='focus:outline-none ps-2 w-full py-2 rounded-full mb-4' type="password" name="" id="password" value={formik.values.password} onChange={formik.handleChange} />
            {
              formik.errors.password ? <div className='bg-white'>{formik.errors.password}</div> : null
            }
            <ErrorMessage></ErrorMessage>
          </div>
          <button className='btn rounded-full' type='submit'>Submit</button>
        </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Form2
