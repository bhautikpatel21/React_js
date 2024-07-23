import React from "react";
import { useState } from "react";
import coffee from "../assets/coffee.avif";
import tea from "../assets/tea.jpg";

export function Coffee() {
  return (
    <div >
      <h1 className="bg-[#45240a] 
      text-[#d2b094] rounded-full p-1 text-3xl m-5 text-center font font-bold font-serif">
        How To Make Iced Coffee
      </h1>

      <div className=" m-10 flex justify-between gap-5 bg-[#583417]">
        <div className="m-5">
          <h2 className="bg-yellow-300 px-5 py-2 rounded-full text-center">Ingredients</h2>
          <ul className="my-5 text-4xl">
            <li className="my-3 text-[#d2b094] text-md">
              3 tablespoons warm water
            </li>
            <li className="my-3 text-[#d2b094] text-md">
              2 teaspoons instant coffee granules
            </li>
            <li className="my-3 text-[#d2b094] text-md">1 teaspoon sugar</li>
            <li className="my-3 text-[#d2b094] text-md">1 cup ice, or as needed</li>
            <li className="my-3 text-[#d2b094] text-md">
              6 fluid ounces cold milk
            </li>
          </ul>
        </div>

        <div className="m-5">
          <h2 className="bg-yellow-300 p-2 rounded-full text-center px-4">
            Directions
          </h2>
          <ul className="mt-5 text-4xl">
            <li className="my-5 text-[#d2b094] text-md">
              1. Gather all ingredients.
            </li>
            <li className="my-5 text-[#d2b094] text-md">
              2. Combine warm water, instant coffee, and sugar in a sealable
              jar. Seal and shake until foamy.
            </li>
            <li className="my-5 text-[#d2b094] text-md">
              3. Pour into a glass full of ice; add milk. Adjust to taste if
              necessary.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Tea() {
    return (
      <div className="">
        <h1 className="bg-[#67360e] 
        text-[#d2b094] rounded-full p-1 text-4xl m-5 text-center font font-bold font-serif">
          How To Make Tea
        </h1>
  
        <div className="m-10 flex justify-evenly   bg-[#ddac84]">
          <div className="m-5 text-4xl">
            <h2 className="bg-yellow-300 px-5 py-2 rounded-full">Ingredients</h2>
            <ul className="my-5">
              <li className="my-3 text-[#442d1a] text-md">
              Indian Tea
              </li>
              <li className="my-3 text-[#442d1a]  text-md">Water</li>
              <li className="my-3 text-[#442d1a]  text-md">
                Sugar
              </li>
              <li className="my-3 text-[#442d1a]  text-md">Milk</li>
              <li className="my-3 text-[#442d1a]  text-md">Ginger</li>
              <li className="my-3 text-[#442d1a]  text-md">Tea Strainer</li>
              <li className="my-3 text-[#442d1a]  text-md">Pot</li>
            </ul>
          </div>
  
          <div className="m-5">
            <h2 className="bg-yellow-300 p-2 px-5 rounded-full text-center">
              Directions
            </h2>
            <ul className="mt-5 text-4xl">
              <li className="my-20 text-[#442d1a]  text-md">
                1. Crush Ginger and Boil Water
              </li>
              <li className="my-20 text-[#442d1a]  text-md">
                2. Adding Sugar and Tea.
              </li>
              <li className="my-20 text-[#442d1a]  text-md">
                3. Afret 3-4 Min Adding Milk
              </li>
              <li className="my-20 text-[#442d1a]  text-md">
                4.  Pour and Enjoy
              </li>

            </ul>
          </div>
        </div>
      </div>
    );
  }

const Recips = () => {
  const [showRecips, setShowRecips] = useState(false);
  const [showRecips2, setShowRecips2] = useState(false);

  const buttonClick1 = () => {
    setShowRecips(!showRecips);
  };

  
    const buttonClick2 = () => {
      setShowRecips2(!showRecips2);
    };



  return (
    <div className=" grid grid-row-2 bg-[#d2b094] p-10 ">
      <button
        className="bg-[#ddac84] text-center font font-bold"
        onClick={buttonClick1}
      >
        <img src={coffee} alt="" className=" text-white text-3xl" />
        <h1 className="text-[#45240a]">Click To Recips and Hiden</h1>{" "}
      </button>
      {showRecips && <Coffee />}

      {/* Tea */}
      <button
        className="bg-[#45240a] text-center font font-bold mt-5"
        onClick={buttonClick2}
      >
        <img src={tea} alt="" className=" text-white text-3xl" />
        <h1 className="text-[#ddac84]">Click To Recips and Hiden</h1>{" "}
      </button>
      {showRecips2 && <Tea />}
    </div>
  );
};

export default Recips;