import { useState } from 'react';

const Counter = () => {

    // declare and initialize a useState to hold a number that we will increment and decrement

    const [numbers, setNumbers] = useState(0);

    // these are my event handlers  incrementNumbers, decrementNumbers and resetNumbers
    const incrementNumbers = () => {
        setNumbers((prevNumbers) => prevNumbers + 1);
        //console.log(`The counter is at # ${numbers}`)
    }

    const decrementNumbers = () => {
       
        if (numbers > 0) {
            
            setNumbers((prevNumbers) => prevNumbers - 1);
            //console.log(`The counter is at # ${numbers}`)
        }
        else {
            
            return alert("The counter is not allowed to be negative");
            //setNumbers(0);
            
        }
    }

    const resetNumbers = () => {
        setNumbers(0);
    }

  return (
    <>
        <main>
            <div className="container centerStyle">

                <div className="displayStyle moveIt">
                    Current Number: {numbers}
                </div>
            
                <div className="displayStyle m-3">
                    <button className="btn btn-success " onClick={incrementNumbers}>+ 1</button>
                    <button className="btn btn-danger " onClick={decrementNumbers}>- 1</button>
                    <button className="btn btn-warning " onClick={resetNumbers}>Reset</button>

                </div>
            </div>
        </main>
    </>
  )
}

export default Counter