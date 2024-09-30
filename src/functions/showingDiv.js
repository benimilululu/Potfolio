import { useEffect, } from "react";
export const ShowingDiv = (ref, setIsVisible) => {
const divRef = ref;

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      } else {
        setIsVisible(false);
      }
    },
    { threshold: 0.1 }
  );

  if (divRef.current) {
    observer.observe(divRef.current);
  }

  return () => {
    if (divRef.current) {
      observer.unobserve(divRef.current);
    }
  };
}, []);
}