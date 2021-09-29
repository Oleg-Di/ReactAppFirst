import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Timer from "./timer";

export const TimerContainer = (props) => {
  const isMounted = useRef(true);

  const [timer, setTimer] = useState({
    total: "",
    days: "",
    seconds: "",
    minutes: "",
    hours: "",
  });

  const getTime = () => {
    const total = Date.parse(props.endtime) - Date.parse(new Date());
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    setTimer({ ...timer, days, seconds, minutes, hours, total });
  };
  const getZero = (number) => {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  };
  useEffect(() => {
    const rush = setInterval(() => {
      isMounted && getTime();
    }, 1000);
    return () => {
      isMounted.current = false;
      if (timer.total <= 0) {
        clearInterval(setInterval(rush));
      }
    };
  }, []);

  return <Timer timer={timer} getZero={getZero} />;
};
