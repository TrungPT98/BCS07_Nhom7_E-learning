import React, { useState, useEffect } from "react";
import './BackToTop.scss'
const BackToTop = () => {
    // trạng thái ẩn thái
    const [isVisible, setIsVisible] = useState(false)

    // sroll top 0
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    }
    
    // trên 300 thì set hiện
    const toggleVisibility = () => {
        if(window.scrollY > 300) {
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    // add vào window
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
          window.removeEventListener("scroll", toggleVisibility);
        };
      }, []);
  return (
    <div
    onClick={scrollToTop}
    // isVisible true thì set css
    className={`back-to-top ${isVisible ? 'visible' : ''}`}>
<i class="fa-solid fa-arrow-up"></i>
    </div>
  )
}

export default BackToTop