// hooks/useFadeScroll.js
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useFadeScroll() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease" });
  }, []);
}
