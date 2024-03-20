// Clock.js
import React, { useState, useEffect } from 'react';

const Clock = ({ timezone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getLocalTime = () => {
    const localTime = new Date(time.toLocaleString('en-US', { timeZone: timezone }));
    return {
      hours: localTime.getHours(),
      minutes: localTime.getMinutes(),
      seconds: localTime.getSeconds(),
    };
  };

  const { hours, minutes, seconds } = getLocalTime();

  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const secondAngle = seconds * 6;

  return (
    <div className="clock">
      <div className="hour-hand" style={{ transform: `rotate(${hourAngle}deg)` }}></div>
      <div className="minute-hand" style={{ transform: `rotate(${minuteAngle}deg)` }}></div>
      <div className="second-hand" style={{ transform: `rotate(${secondAngle}deg)` }}></div>
    </div>
  );
};

export default Clock;
