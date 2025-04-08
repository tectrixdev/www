// damn accurate age calculator
"use client";
import { useEffect, useState } from "react";

export default function Age() {
  const [age, setAge] = useState(() => calculateAge());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function calculateAge() {
    return ((Math.floor(Date.now() / 1000) - 1255298400) / 31556926).toFixed(7); // don't ask why
  }
  return age;
}
