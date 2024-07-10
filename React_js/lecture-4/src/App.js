import './App.css';
// How to add image...
import img from "./asset/island-image.jpg"

function App() {
  // topics : Rendering Expressions, Lists (map()), methods, images

  const firstName = "Dudhat";
  const lastName = "Bhautik";

  // Rendering lists -> using map() method

  const arr = ["Rohit","virat","Axar","Bumrah","Arshdeep"];

  return (
    <div className="App">
    <h3>My first name is {firstName} and my lastName is {lastName}</h3>
    <h1>rendaring expression and listing</h1>

    {/* How to read image in react js */}
    <img src={img} alt="not found" />
    <h1>10 and 20 sum is {10+20}</h1>
    {arr.map((cvalue,index,arr) => {
      return (
        <div>
          <p>Indian Cricter = {cvalue}</p>
        </div>
      );
    })}
    <hr />
    </div>
  );
} 

export default App;
