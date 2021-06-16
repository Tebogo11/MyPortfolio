import React from "react";
import backgroundVideo from "../../../asserts/Video/Earth.mp4";
const BackGroundVideo = () => {
  return (
    <div>
      <video
        style={{
          position: "absolute",
          width: "100%",
          height: "700px",
          top: "50%",
          left: "50%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackGroundVideo;
