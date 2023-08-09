import React, { useState, useEffect } from "react";
import './BackToTop.scss'
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    }

    const toggleVisibility = () => {
        if(window.scrollY > 300) {
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
          window.removeEventListener("scroll", toggleVisibility);
        };
      }, []);
  return (
    <div
    onClick={scrollToTop}
    className={`back-to-top ${isVisible ? 'visible' : ''}`}>
<i class="fa-solid fa-arrow-up"></i>
    </div>
  )
}

export default BackToTop