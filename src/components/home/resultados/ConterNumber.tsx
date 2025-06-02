"use client";
import { useEffect, useState, useRef } from "react";

interface CounterNumberProps {
  from?: number;
  to: number;
  duration?: number;
  plus?: boolean;
}

const ConterNumber = ({
  from = 0,
  to,
  duration = 2,
  plus = false,
}: CounterNumberProps) => {
  const [count, setCount] = useState(from);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [countFinished, setCountFinished] = useState(false);

  const formatNumber = (num: number): string => {
    if (num < 1000) {
      return num.toString();
    } else if (num < 10000) {
      const thousands = num / 1000;
      if (thousands % 1 === 0) {
        return `${Math.floor(thousands)}k`;
      } else {
        return `${thousands.toFixed(1)}k`;
      }
    } else if (num < 1000000) {
      return `${Math.floor(num / 1000)}k`;
    } else {
      const millions = num / 1000000;
      if (millions % 1 === 0) {
        return `${Math.floor(millions)}M`;
      } else {
        return `${millions.toFixed(1)}M`;
      }
    }
  };

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;
    let start: number | null = null;
    let animationFrameId: number;

    const animate = (timeStamp: number) => {
      if (!start) start = timeStamp;
      const progress = timeStamp - start;
      const increment = (to - from) / (duration * 1000);

      const currentCount = Math.min(from + increment * progress, to);
      setCount(Math.floor(currentCount));

      if (currentCount < to) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCountFinished(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start = null;
          setCountFinished(false);
          animationFrameId = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [from, to, duration]);

  return (
    <>
      <span ref={counterRef}>{formatNumber(count)}</span>
      {countFinished && plus && <span>+</span>}
    </>
  );
};

export default ConterNumber;
