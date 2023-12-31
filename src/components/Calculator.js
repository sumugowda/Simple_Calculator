import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");
  const [history, setHistory] = useState("");

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearScreen = () => {
    setResult("");
  };

  const calculate = () => {
    // eslint-disable-next-line
    const calculationResult = eval(result).toString();
    setResult(calculationResult);
    setHistory(`${history}\n${result} = ${calculationResult}`);
  };

  return (
    <> 
    <h1 className="" style={{fontSize:"50px"}}>Simple Calculator</h1>
      <div className="bg-gray-200 text-black w-screen h-screen flex justify-center items-center">
        <div className="w-64 h-auto bg-gray-600  shadow-xl border-4 border-green-200">
          <div className="screen p-2">
            <input
              type="text"
              value={result}
              className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]text-white px-1 text-right placeholder-black outline-none rounded-lg bg-gray-500 text-2xl pt-10 w-full text-black"
              placeholder="0"
            />
          </div>

          <div className="brand flex justify-center mb-2 shadow-md text-green-300  bg-gray-900 bg-opacity-90">
            <h1 className=" text-green-300 text-xs font-bold">Sumanth</h1>
          </div>

          <div className="keyboard">
            <div className="m-2 flex justify-between">
              <input
                type="button"
                onClick={clearScreen}
                value="C"
                className="bg-red-800 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="<"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="%"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="/"
                className=" shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
            </div>

            <div className="m-2 flex justify-between">
              <input
                type="button"
                value="7"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="8"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="9"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="*"
                className=" shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
            </div>

            <div className="m-2 flex justify-between">
              <input
                type="button"
                value="4"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="5"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="6"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="-"
                className=" shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
            </div>

            <div className="m-2 flex justify-between">
              <input
                type="button"
                value="1"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="2"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="3"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="+"
                className=" shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
            </div>

            <div className="m-2 flex justify-between">
              <input
                type="button"
                value="0"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="00"
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                value="."
                className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
                onClickCapture={clickHandle}
              />
              <input
                type="button"
                onClick={calculate}
                value="="
                className="bg-orange-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"
              />
            </div>
            <div className="card text-bg-dark  mb-3 m-4" style={{maxWidth: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">History</h5>
          <p className="card-text d-flex ">
          <textarea
              value={history}
              className=" shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]text-white px-1 text-center placeholder-black outline-none rounded-lg bg-gray-500 text-2xl w-full text-black resize-none"
              placeholder="History will be displayed here"
              rows={3} // Set appropriate number of rows as per your design
              readOnly // Make the textarea read-only
            />
           
          </p>
        </div>
      </div>
          </div>
        </div>
        
      </div>
     
    </>
  );
}

export default Calculator;
