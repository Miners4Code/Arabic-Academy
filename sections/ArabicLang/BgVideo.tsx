"use client";

import React from "react";
import styles from "./video.module.css";

function BgVideo() {
  const [source, setSource] = React.useState<string>("/aca-video-desktop.mp4");

  React.useEffect(() => {
    const updateVideoSource = () => {
      const width = window.innerWidth;

      if (width > 768) {
        setSource("/aca-video-desktop.mp4");
      } else {
        setSource("/aca-video-mobile.mp4");
      }
    };

    updateVideoSource();

    window.addEventListener("resize", updateVideoSource);

    return () => {
      window.removeEventListener("resize", updateVideoSource);
    };
  }, []);

  return (
    <video className={styles.video} autoPlay loop muted playsInline>
      <source src={source} />
    </video>
  );
}

export default BgVideo;
