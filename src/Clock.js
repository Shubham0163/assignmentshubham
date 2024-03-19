import React, { useState, useEffect } from 'react';

const Clock = ({ timezone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <div className="hour-hand" style={{ transform: `rotate(${time.getHours() * 30}deg)` }}></div>
      <div className="minute-hand" style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }}></div>
      <div className="second-hand" style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}></div>
      <div className="timezone">{timezone}</div>
    </div>
  );
};

export default Clock;
