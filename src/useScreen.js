import { useEffect, useState } from "react";
export default function useScreen() {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  const checkScreenSize = () => {
    if (window.innerWidth > 900) return setScreenSize("Large");
    if (window.innerWidth < 900 && window.innerWidth > 600)
      return setScreenSize("Medium");
    if (window.innerWidth < 600) return setScreenSize("Small");
  };
  return screenSize;
}
