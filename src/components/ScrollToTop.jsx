import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]); // runs every time path changes

  return null; // this component doesn’t render anything
}
