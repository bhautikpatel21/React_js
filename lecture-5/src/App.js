import './App.css';
// import Header from "./components/Header"
// import Card from "./components/Card";
import Templete from './components/Templete';
import i1 from './asset/i1.avif'
import i2 from './asset/i2.avif'
import i3 from './asset/i3.avif'
import i4 from './asset/i4.avif'
import i5 from './asset/i5.avif'
import i6 from './asset/i6.avif'

function App() {
  return (
    <div className="App justify-center mt-6">
    <h1 className='font-bold text-[30px]'>Responsive product cart grid</h1>
    <h1 className='font-medium text-[20px]'>React.js</h1>
        {/* <Header name="bhautik" city="surat"/>
    <Card name="card1" price="200"/>
    <Card name="card2" price="400"/>
    <Card name="card3" price="600"/>
    <Card name="card4" price="800"/> */}
    <div className='w-[70%] h-lvh grid grid-cols-3 ml-48'>
    <Templete img = {i1}/>
    <Templete img = {i2}/>
    <Templete img = {i3}/>
    <Templete img = {i4}/>
    <Templete img = {i5}/>
    <Templete img = {i6}/>
    </div>
    </div>
  );
}


export default App;