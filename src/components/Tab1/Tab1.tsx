import { createRef, useEffect, useRef, useState } from "react";

const Tab1: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [watched, setWatched] = useState(false);
  const ref = createRef<HTMLDivElement>();
  const someMutable = useRef<number>(0);

  function count() {
    setCounter((v) => v+1)
  }

  useEffect(() => {
    console.log("Watched: ", watched);
    setCounter(v => v+1)
  }, [watched])

  useEffect(() => {
    ref.current!.innerHTML = `watched: ${watched}`
  }, [watched])

  someMutable.current++;

  return (
    <div style={{height: "calc(100vh - 70px)", background: "lightblue", color: "white"}}>
      Tab1
      <div>
        Counter: { counter}
      </div>
      <button onClick={count}>Count + 1</button>
      <button onClick={() => setWatched(w => !w)}>set watched</button>
      <div ref={ref}>
        Ref!
      </div>
    </div>
  )
}

export default Tab1;
