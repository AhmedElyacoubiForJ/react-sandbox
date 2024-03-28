// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})   // Runs after every re-render
// 2. useEffect(() => {}, []) // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + value changes

// USES
// #1 Event Listeners
// #2 Dom manipulation
// #3 Subscribing (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when component unmounts

import { useState, useEffect } from "react";

function UseEffectExample() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // 
    //window.addEventListener("resize", handleResize)
    //console.log("EVENT LISTENER ADDED")

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("EVENT LISTENER ADDED")
         return () => {
            window.removeEventListener("resize", handleResize)
            console.log("EVENT LISTENER REMOVED")
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    },[width, height])

    // run after every re-render
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // })

    // run only on mount
    //  useEffect(() => {
    //     document.title = "My Counter program";
    // }, [])

    // you can say exact when the code should run
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        //
        return () => {
            // SOME CLEAN UP CODE HERE
        }
    }, [count, color])

    function addCount() {
        setCount(c => c + 1)
    }

    function substractCount() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }

    return (
        <>
           {/*  <p style={{color: color}}>Count: {count} </p>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount}>Substract</button><br />
            <button onClick={changeColor}>Change Color</button> */}

            <p>Window Width: {width} </p>
            <p>Window Hight: {height} </p>
            
        </>
    )
}

export default UseEffectExample;




