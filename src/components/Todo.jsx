import { useState, useEffect, useRef } from "react";

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    console.log("MyTodo is mounted")
    return () => {
      console.log("MyTodo is unmounted")
      isMounted.current = false;
    }

   }, []);

  return (
    <>
      {loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>}
    </>
  );
}

export default Todo;





// const controller = new AbortController();

// // fetch("https://jsonplaceholder.typicode.com/todos/1", {
// //   signal: controller.signal,
// // })
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => {
//     setTimeout(() => {
//       if (isMounted.current) {
//       setTodo(data);
//       setLoading(false);
//       }
//     }, 3000);
//   });
 
// if (divRef.current === null || divRef.current === undefined) {
//   isMounted.current = false;
//   console.log("Unmounting Todo");
// }


