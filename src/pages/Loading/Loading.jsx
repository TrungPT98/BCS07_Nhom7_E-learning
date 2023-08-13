import React from 'react'
import Lottie from "react-lottie";
import animationLoadingPage from "./../../assets/animation/animationLoadingPage.json";
const Loading = () => {
     const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoadingPage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen w-full flex items-center fixed bg-white"
    style={{zIndex: '9999'}}
    >
        <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

export default Loading