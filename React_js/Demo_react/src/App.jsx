// import 'bootstrap/dist/css/bootstrap.min.css';
// import ImgComp from './components/ImgComp'
// import React from 'react'
// import Component1 from './components/Component1'
// import Variable from './components/Variable'
// import Array from './components/Array'
// import Props from './components/Props'
// import Onclick from './components/Onclick'
// import TypesExample from './components/Bootstrap';
// import UseState from './components/UseState';
// import ListRendering from './components/ListRendering';

// function App() {
//   return (
//     <>
//     <div className='font-bold text-2xl flex flex-col justify-center items-center'>
//       <h1 className='text-red-600'>This is main component h1 tag</h1>
//     <ImgComp/>
//     <Component1/>
//     <Variable/>
//     <Array/>
//     <Props name = {" This is Props "}/>
//     <Onclick/> 
//     <TypesExample/>
//     <UseState/>
//     <ListRendering/>
//     </div> 
//     </>
//   )
// }

// export default App

import React from 'react'
import Layout from './components/Layout'
import Formik from './components/Formik'

function App() {
  return (
    <div>
      {/* <Layout/> */}
      <Formik/>

    </div>
  )
}

export default App
