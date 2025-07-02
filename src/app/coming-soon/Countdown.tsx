'use client';

import { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const boxStyle =
    'flex flex-col items-center justify-center bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded shadow text-center';

  const valueStyle = 'text-xl md:text-2xl font-semibold text-gray-800';
  const labelStyle = 'text-sm text-gray-500';

  return (
    <div className="flex gap-4">
      <div className={boxStyle}>
        <span className={valueStyle}>{timeLeft.days}</span>
        <span className={labelStyle}>Days</span>
      </div>
      <div className={boxStyle}>
        <span className={valueStyle}>{timeLeft.hours}</span>
        <span className={labelStyle}>Hours</span>
      </div>
      <div className={boxStyle}>
        <span className={valueStyle}>{timeLeft.minutes}</span>
        <span className={labelStyle}>Mins</span>
      </div>
      <div className={boxStyle}>
        <span className={valueStyle}>{timeLeft.seconds}</span>
        <span className={labelStyle}>Sec</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
