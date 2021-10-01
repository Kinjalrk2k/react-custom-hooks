import { useEffect, useRef, useState } from "react";

const useCounter = (start, end) => {
  const [count, setCount] = useState(start);
  const timer = useRef();

  //start the count down
  useEffect(() => {
    if (start > end) {
      timer.current = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, []);

  //stop the timer once end value is reached
  useEffect(() => {
    if (count === end) {
      clearInterval(timer.current);
    }
  }, [count, end]);

  //update count when start value gets updated
  useEffect(() => {
    setCount(start);
  }, [start]);

  return count;
};
