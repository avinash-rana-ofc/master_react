import { useEffect, useState } from "react";

const useTimer = (initialValue, incrementBy) => {
  const [time, setTime] = useState(initialValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + incrementBy);
      return () => clearInterval(timer);
    }, 1000);
  }, []);

  return time;
};

export default useTimer;
